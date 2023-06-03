import { ProfilePicture } from "~/components/ProfilePicture";
import Protected from "~/components/Protected";

export const { routeData, Page } = Protected((session) => {
	const user = session.user;

  return (
    <main class="grow flex flex-col items-center justify-center">
			<ProfilePicture src={user?.image as string} />
      <div class="my-4 text-lg font-medium">Hello {user?.name}</div>
    </main>
  );
})

export default Page;

