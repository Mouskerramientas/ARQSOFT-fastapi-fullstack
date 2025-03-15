import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuthContext } from "../../context/authContext";
import Spinner from "../../components/Spinner";

export const Route = createFileRoute("/dashboard/users")({
  component: RouteComponent,
});

function RouteComponent() {
  const authContext = useAuthContext();

  const navigate = useNavigate();

  if (!authContext?.userInfo.is_admin) {
    navigate({ to: "/dashboard" });
  }

  return (
    <div className="flex flex-row items-center justify-center h-full w-full">
      <Spinner /> Loading
    </div>
  );
}
