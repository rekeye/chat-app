import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { PrismaClient } from "@prisma/client";


const t = initTRPC.create();

const prisma = new PrismaClient();
const publicProcedure = t.procedure;
export const appRouter = t.router({
	user: t.router({
		getByEmail: publicProcedure
			.input(
				z.object({
					email: z.string(),
				})
			)
			.query(async ({ input }) => {
				return await prisma.user.findUnique({ where: { email: input.email } })
			})
	})
});

export type AppRouter = typeof appRouter;

