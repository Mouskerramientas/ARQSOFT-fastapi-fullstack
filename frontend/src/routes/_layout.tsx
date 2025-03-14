import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useAuthContext } from "../context/authContext";
import { useEffect } from "react";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  const context = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (context) {
      if (!context.validateLogin()) {
        navigate({ to: "/login" });
      }
    }
  }, []);

  return (
    <div>
      Hello "/__layout"!
      <Outlet />
    </div>
  );
}
