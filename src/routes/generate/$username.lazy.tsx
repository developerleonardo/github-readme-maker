import { createLazyFileRoute } from "@tanstack/react-router";
import Layout from "@/Layout/Layout";
//import { useReadmeStore } from "@/stores";
import { ReadmePreview } from "@/components/ReadmePreview";

export const Route = createLazyFileRoute("/generate/$username")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Layout>
        <ReadmePreview />
      </Layout>
    </>
  );
}
