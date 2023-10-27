import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { Configuration, OpenAIApi } from "openai";
import { env } from "~/env.mjs";
import { b64Image } from "~/data/b64Image";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: env.ACCESS_KEY_ID,
    secretAccessKey: env.SECRET_ACCESS_KEY,
  },
  region: "us-west-1",
});

const BUCKET_NAME = "icon-generator-londelidess";

const configuration = new Configuration({
  apiKey: env.DALLE_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateIcon(
  prompt: string,
  numberOfIcons = 1
  ): Promise<string[] | undefined> {
  if (env.MOCK_DALLE === "true") {
    return new Array<string>(numberOfIcons).fill(b64Image);
  } else {
    const response = await openai.createImage({
      prompt,
      n: numberOfIcons,
      size: "512x512",
      response_format: "b64_json",
    });
    return response.data.data.map((result) => result.b64_json || "");
  }
}

export const generateRouter = createTRPCRouter({
  generateIcon: protectedProcedure
    .input(
      z.object({
        prompt: z.string(),
        color: z.string(),
        // shape: z.string(),
        style: z.string(),
        numberOfIcons: z.number().min(1).max(10),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { count } = await ctx.prisma.user.updateMany({
        where: {
          id: ctx.session.user.id,
          credits: {
            gte: input.numberOfIcons,
          },
        },
        data: {
          credits: {
            decrement: input.numberOfIcons,
          },
        },
      });

      if (count <= 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "you do not have enough credits",
        });
      }

      const finalPrompt = `${input.color} square icon of ${input.prompt} in ${input.style} style. High-quality, Unreal Engine graphics level. Trending on ArtStation.`;

      const base64EncodedImages = await generateIcon(
        finalPrompt,
        input.numberOfIcons
      );

      if (!base64EncodedImages) {
        throw new Error('Failed to generate icons');
      }

      const createdIcons = await Promise.all(
        base64EncodedImages.map(async (image) => {
          const icon = await ctx.prisma.icon.create({
            data: {
              prompt: input.prompt,
              userId: ctx.session.user.id,
            },
          });
          await s3
            .putObject({
              Bucket: BUCKET_NAME,
              Body: Buffer.from(image, "base64"),
              Key: icon.id,
              ContentEncoding: "base64",
              ContentType: "image/png",
            })
            .promise();
          return icon;
        })
      );

      return createdIcons.map((icon) => {
        return {
          imageUrl: `https://${BUCKET_NAME}.s3.amazonaws.com/${icon.id}`,
        };
      });
    }),
});
