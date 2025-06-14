import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <main className="flex min-h-svh flex-col items-center">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
