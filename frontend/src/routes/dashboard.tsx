import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useAuthContext } from "../context/authContext";
import { useEffect } from "react";
import Spinner from "../components/Spinner";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const context = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!context?.userInfo.username) {
      navigate({ to: "/login" });
    }
  }, [context, navigate]);

  // If the user is authenticated, render the dashboard content
  if (context?.userInfo.username) {
    return (
      <div>
        Esta es la ruta principal de dashboard
        <Outlet />
      </div>
    );
  }

  return <Spinner />;
}
