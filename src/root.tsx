// @refresh reload
import { A } from "@solidjs/router";
import { Show, Suspense } from "solid-js";
import {
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title,
} from "solid-start";
import { LogoutButton } from "./components/LogoutButton";
import { useSession } from "./hooks/useSession";
import "./root.css";

export default function Root() {
	const session = useSession();

	return (
		<Html lang="en">
			<Head>
				<Title>Chat app</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Body class="min-h-screen flex flex-col bg-neutral-600 text-white">
				<Suspense>
					<ErrorBoundary>
						<header class="py-2 px-4 flex justify-between items-center bg-neutral-900 shadow">
							<A href="/" class="text-lg">Chat app</A>
							<Show when={session()?.user}>
								<LogoutButton />
							</Show>
						</header>
						<Routes>
							<FileRoutes />
						</Routes>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);
}
