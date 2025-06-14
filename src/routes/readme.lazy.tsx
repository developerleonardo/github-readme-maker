import { Button } from "@/components/ui/button";
import Layout from "@/Layout/Layout";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/readme")({
  component: Readme,
});

function Readme() {
  return (
    <>
      <Layout>
        <h1 className="text-2xl font-bold">Readme</h1>
        <p className="mt-4">This is the readme route of your application.</p>
        <Button asChild>
          <Link to={"/"}>Go back to Home</Link>
        </Button>
      </Layout>
    </>
  );
}
