import Protected from "~/components/Protected";

export const { routeData, Page } = Protected((_session) => {
  return (
    <main class="text-center mx-auto p-4">
      Hello
    </main>
  );
})

export default Page;

