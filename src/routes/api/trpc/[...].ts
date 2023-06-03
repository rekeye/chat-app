import { APIEvent } from "solid-start/api";
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from "~/lib/router";
import { getSession } from "@auth/solid-start";
import { authOpts } from "../auth/[...solidauth]";

const handler = (event: APIEvent) =>
	fetchRequestHandler({
		endpoint: '/api/trpc',
		req: event.request,
		router: appRouter,
		createContext: async () => {
			const session = await getSession(event.request, authOpts);
			return {
				user: session?.user
			}
		},
	});

export const GET = handler;
export const POST = handler;

