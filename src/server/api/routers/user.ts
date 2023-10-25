import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    getCredits: protectedProcedure.query(async ({ ctx }) => {
        const user = await ctx.prisma.user.findUnique({
            where: {
                id: ctx.session.user.id,
            }
        });
        if (user) {
            // console.log(user?.credits);
            return user?.credits;
        } else {
            throw new Error('User not found');
        }
    }),
});
