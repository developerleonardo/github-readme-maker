import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Welcome to the Root Route</h1>
        <p className="mt-4">This is the root route of your application.</p>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
