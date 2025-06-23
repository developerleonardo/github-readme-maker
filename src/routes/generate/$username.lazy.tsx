import { createLazyFileRoute } from "@tanstack/react-router";
import Layout from "@/Layout/Layout";
import { useReadmeStore } from "@/stores";
import { ReadmePreview } from "@/components/ReadmePreview";

export const Route = createLazyFileRoute("/generate/$username")({
  component: RouteComponent,
});

function RouteComponent() {
  const githubUser = useReadmeStore((state) => state.githubUser);
  const { username } = Route.useParams();

  console.log("Github user:  ", githubUser?.name);
  return (
    <>
      <Layout>
        <h1>{username} Readme</h1>
        <ReadmePreview />
      </Layout>
    </>
  );
}
