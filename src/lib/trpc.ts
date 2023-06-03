import {
  createTRPCProxyClient,
  httpBatchLink,
  loggerLink,
} from '@trpc/client';
import type { AppRouter } from "./router";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [loggerLink(), httpBatchLink({ url: "/api/trpc" })],
});

