import { createSignal } from "solid-js";
import { v4 as uuidv4 } from "uuid";
import { AvatarGenerator } from "~/components/AvatarGenerator";
import Protected from "~/components/Protected";

export const { routeData, Page } = Protected((session) => {
	const user = session.user
	const [avatarId, setAvatarId] = createSignal(uuidv4())

	return (
		<main class="grow flex flex-col items-center justify-center">
			<h1 class="py-4 text-2xl font-semibold">Welcome</h1>
			<form class="flex flex-col items-center">
			<h2 class="py-2 text-xl font-medium">Select your avatar</h2>
				<AvatarGenerator url={`https://source.boringavatars.com/beam/120/${avatarId()}`} onRegenerate={() => setAvatarId(uuidv4())} />
			</form>
		</main>
	);
})

export default Page;

