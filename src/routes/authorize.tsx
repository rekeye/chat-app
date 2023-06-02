import { signIn } from "@auth/solid-start/client";
import { Button } from "~/components/Button";

export default function Authorize() {
	const handleLogin = () => signIn(
		"google",
		{ callbackUrl: "/", }
	);

	return (
		<div class="grow flex justify-center items-center">
			<Button text="Login with Google" onClick={handleLogin} />
		</div>
	)
}
