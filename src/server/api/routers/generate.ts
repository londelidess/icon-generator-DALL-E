import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "~/server/api/trpc";
import { env } from "~/env.mjs"
// import OpenAI from "openai";

// const openai = new OpenAI({
//     apiKey: env.DALLE_API_KEY
// });
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: env.DALLE_API_KEY,
})

const openai = new OpenAIApi(configuration);

async function generateIcon(prompt:string):Promise<string | undefined>{
  if(env.MOCK_DALLE==='true'){
    return "https://oaidalleapiprodscus.blob.core.windows.net/private/org-17YvemH7hUYRWu3BwlurJe13/user-Z6AbYbdvU62onlIAG5wNzeV9/img-mX2X8CnY8XVftTmKs8YJnTfK.png?st=2023-10-19T19%3A18%3A37Z&se=2023-10-19T21%3A18%3A37Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-19T18%3A09%3A27Z&ske=2023-10-20T18%3A09%3A27Z&sks=b&skv=2021-08-06&sig=9en3nsK9XpEZiEaTNnvtM79qPkZHQL5CpCyprTc9394%3D"
  } else {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    return response.data.data[0]?.url;
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

      const url = await generateIcon(input.prompt)

      return {
        imageUrl: url,
      };
    }),
});
