import { type Session } from "@auth/core/types";
import { getSession } from "@auth/solid-start";
import { PrismaClient } from "@prisma/client";
import { Component, Show } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerData$, redirect } from "solid-start/server";
import { authOpts } from "~/routes/api/auth/[...solidauth]";

const prisma = new PrismaClient();
const Protected = (Comp: ProtectedComponent) => {
  const routeData = () => {
    return createServerData$(
      async (_, event) => {
        const session = await getSession(event.request, authOpts);
        if (!session || !session.user) {
          throw redirect("/authorize");
        }

				if (!event.request.url.endsWith("/welcome")) {
					const user = await prisma.user.findUnique({ where: { email: session.user.email as string } });
					if (!user)
						throw redirect("/welcome");
					return {
						...session,
						user: {
							name: user.name,
							email: session.user.email,
							image: user.image,
						}
					}
				}

				return session;
      },
      { key: () => ["auth_user"] }
    );
  };


  return {
    routeData,
    Page: () => {
      const session = useRouteData<typeof routeData>();
      return (
        <Show when={session()} keyed>
          {(sess) => <Comp {...sess} />}
        </Show>
      );
    },
  };
};

type ProtectedComponent = Component<Session>;

export default Protected;
