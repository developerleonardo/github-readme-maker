import { Button } from "@/components/ui/button";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <h1>I'm a hero</h1>
      <Link to={"/readme"}>
        <Button>Click me</Button>
      </Link>
    </div>
  );
}
