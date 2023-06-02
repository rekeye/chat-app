import { signOut } from "@auth/solid-start/client";
import { Button } from "~/components/Button";
import Protected from "~/components/Protected";

export const { routeData, Page } = Protected((session) => {
	const user = session.user

	const handleLogout = () => signOut() 

  return (
    <main class="grow flex flex-col items-center justify-center">
      <div class="my-4">Hello {user?.name}</div>
			<Button text="Logout" onClick={handleLogout} />
    </main>
  );
})

export default Page;

