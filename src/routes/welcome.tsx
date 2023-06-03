import { createSignal } from "solid-js";
import { createRouteAction } from "solid-start";
import { v4 as uuidv4 } from "uuid";
import { ProfilePictureGenerator } from "~/components/ProfilePictureGenerator";
import Protected from "~/components/Protected";

export const { routeData, Page } = Protected(() => {
	const [avatarUrl, setAvatarUrl] = createSignal(generateAvatar())

	function generateAvatar() {
		const avatarId = uuidv4();
		const colors = ["240F03", "4B2409", "BD7A22", "E79022", "DF621C"].join(",")
		return `https://source.boringavatars.com/beam/192/${avatarId}?colors=${colors}&square`
	}

	const [_, { Form }] = createRouteAction(async (formData: FormData) => {
		const username = formData.get("username");
	});

	return (
		<main class="grow flex flex-col items-center">
			<h1 class="my-4 text-2xl font-semibold">Welcome</h1>
			<Form class="flex flex-col items-center">
				<h2 class="mb-4 text-xl font-medium">Select your profile picture</h2>
				<ProfilePictureGenerator src={avatarUrl()} onRegenerate={() => setAvatarUrl(generateAvatar())} />
				<h2 class="my-4 text-xl font-medium">Select your username</h2>
				<input class="py-2 px-4 bg-neutral-300 text-black rounded !outline-brown-500" name="username" />
				<button class="my-4 py-2 px-4 rounded bg-neutral-800">Confirm your selection</button>
			</Form>
		</main>
	);
})

export default Page;

