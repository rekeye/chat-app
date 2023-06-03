import { initTRPC, TRPCError } from '@trpc/server';
import { z } from 'zod';
import { PrismaClient } from "@prisma/client";


const t = initTRPC.create();
const prisma = new PrismaClient();

const procedure = t.procedure;

const isAuthed = t.middleware(async ({ ctx, next }) => {
	if (!("user" in ctx)) throw new TRPCError({ code: "UNAUTHORIZED" })
	return next({
		ctx: {
			user: ctx.user as {
				name: string;
				email: string;
				image: string;
			}
		}
	})
})
const authedProcedure = procedure.use(isAuthed)
export const appRouter = t.router({
	user: t.router({
		getByEmail: procedure
			.input(
				z.object({
					email: z.string(),
				})
			)
			.query(async ({ input }) => {
				return await prisma.user.findUnique({ where: { email: input.email } })
			}),
		create: authedProcedure
			.input(
				z.object({
					username: z.string(),
					profilePicture: z.string()
				})
			)
			.mutation(async ({ input, ctx }) => {
				return await prisma.user.create({ data: {
					email: ctx.user.email,
					name: input.username,
					image: input.profilePicture
				}})
			})
	})
});

export type AppRouter = typeof appRouter;

