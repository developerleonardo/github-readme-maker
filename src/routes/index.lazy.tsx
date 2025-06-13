import { BubbleBackground } from "@/BubleBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-svh max-w-4xl h-full grid grid-cols-1 grid-rows-[1fr_20px_20px] pt-24 pb-8">
      <main className="flex flex-col items-center">
        <h1 className="text-5xl font-semibold mb-12 text-center text-heading-1">
          Your Github Deserves More Than an Empty README
        </h1>
        <p className="text-base">
          Enter your GitHub username and get a personalized README you can be
          proud of.
        </p>
        <form action="" className="flex w-full max-w-lg gap-4 mt-9">
          <Input
            type="text"
            id="username"
            placeholder="developerleonardo"
            className="grow py-2"
          />
          <Button asChild>
            <Link to={"/readme"}>Get Started</Link>
          </Button>
        </form>
        <img
          src="./img/hero-project.webp"
          alt="Hero image"
          width={571}
          height={390}
          className="mt-12"
        />
      </main>
      <p className="text-sm text-muted-foreground text-center">
        Made with ❤️ by{" "}
        <a
          href="/https://www.linkedin.com/in/leonardo-salazar-serna/"
          className="text-primary underline-offset-4 hover:underline"
        >
          Leonardo Salazar
        </a>
      </p>
      <p className="text-sm text-muted-foreground text-center">
        Open source and free forever
      </p>
      <BubbleBackground />
    </div>
  );
}
