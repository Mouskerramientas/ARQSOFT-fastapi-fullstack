import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
  beforeLoad: async () => {
    // if (!isLoggedIn()) {
    if (true) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

function RouteComponent() {
  return (
    <div>
      Hello "/__layout"!
      <Outlet />
    </div>
  );
}
