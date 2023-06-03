import Protected from "~/components/Protected";

export const { routeData, Page } = Protected((session) => {
	const user = session.user

  return (
    <main class="grow flex flex-col items-center justify-center">
      <div class="my-4">Hello {user?.name}</div>
    </main>
  );
})

export default Page;

