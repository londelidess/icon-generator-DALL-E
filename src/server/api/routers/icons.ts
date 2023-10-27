import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { z } from "zod";

export const iconsRouter = createTRPCRouter({
  getIcons: protectedProcedure
  .input(
      z.object({
          page: z.number().min(1),
      })
  )
  .query(async ({ ctx, input }) => {
      const page = input.page;
      const skip = (page - 1) * 24;
    //   console.log("Current Skip Value:", skip);
    //   console.log("Input Value:", input);

      const icons = await ctx.prisma.icon.findMany({
          where: {
              userId: ctx.session.user.id,
          },
          skip: skip,
          take: 24,
          orderBy: {
              createdAt: "desc",
          },
      });
      return icons;
  }),

  getCommunityIcons: publicProcedure
  .input(
      z.object({
          page: z.number().min(1),
      })
  )
  .query(async ({ ctx, input }) => {
      const page = input.page;
      const skip = (page - 1) * 36;

      const icons = await ctx.prisma.icon.findMany({
          skip: skip,
          take: 36,
          orderBy: {
              createdAt: "desc",
          },
      });
      return icons;
  }),
});
