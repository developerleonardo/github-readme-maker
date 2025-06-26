import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <main className="min-h-svh">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  ),
});
