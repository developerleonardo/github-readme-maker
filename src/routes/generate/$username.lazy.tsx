import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import Layout from "@/Layout/Layout";
import { useReadmeStore } from "@/stores";

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
        <h1 className="text-2xl font-bold">Readme</h1>
        <p className="mt-4">This is the readme of {username}</p>
        <Button asChild>
          <Link to={"/"}>Go back to Home</Link>
        </Button>
      </Layout>
    </>
  );
}
