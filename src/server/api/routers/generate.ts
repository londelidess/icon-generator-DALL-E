import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { env } from "~/env.mjs"
import { b64Image } from "~/data/b64Image";

import { Configuration, OpenAIApi } from 'openai';
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
})

const openai = new OpenAIApi(configuration);

async function generateIcon(prompt:string):Promise<string | undefined>{
  if(env.MOCK_DALLE==='true'){
    return b64Image;
  } else {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "512x512",
      response_format:"b64_json"
    });

    // console.log("---")
    // console.log(response.data.data[0]?.b64_json)
    // console.log("---")
    return response.data.data[0]?.b64_json;
  }
}

export const generateRouter = createTRPCRouter({
  generateIcon: protectedProcedure
    .input(
      z.object({
        prompt: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // console.log("we are here", input.prompt);

      //TO DO: verify the user has enough credit
      const { count } = await ctx.prisma.user.updateMany({
        where: {
          id: ctx.session.user.id, //TO DO: replace with a real id
          credits: {
            gte: 1
          }
        },
        data: {
          credits: {
            decrement: 1,
          },
        },
      })

      if (count <= 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You do not have enough credits",
        });
      }
      // console.log(results);
      // TO DO: make a fetch request to DALLE api

      const base64EncodedImage = await generateIcon(input.prompt)

      const icon = await ctx.prisma.icon.create({
        data:{
          prompt: input.prompt,
          userId: ctx.session.user.id
        }
      })

      // // TO DO: save the image to the S3 bucket
      await s3
      .putObject({
        Bucket: BUCKET_NAME,
        Body: Buffer.from(base64EncodedImage!,"base64"),
        Key: icon.id,//TO DO: generate a random ID
        ContentEncoding:"base64",
        ContentType:"image/png",
      })
      .promise();

      return {
        imageUrl: `https://${BUCKET_NAME}.s3.us-west-1.amazonaws.com/${icon.id}`,
        // imageUrl: base64EncodedImage,
      };
    }),
});
