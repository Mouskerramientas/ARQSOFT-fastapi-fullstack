import {
  createFileRoute,
  Link,
  Outlet,
  useNavigate,
} from "@tanstack/react-router";
import { useAuthContext } from "../context/authContext";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
import {
  FaBookReader,
  FaServer,
  FaServicestack,
  FaTerminal,
  FaUserAstronaut,
  FaUserCheck,
} from "react-icons/fa";
import DashboardLink from "../components/DashboardLink";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const context = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!context?.isValid) {
      navigate({ to: "/login" });
    }
  }, [context, navigate]);

  // If the user is authenticated, render the dashboard content
  if (context?.isValid) {
    return (
      <div className="flex flex-row h-full w-screen">
        <aside className="w-72 flex flex-col gap-4 p-4 m-2 mt-1 mr-1 rounded-xl md:bg-neutral-200/80 md:dark:bg-gray-900/40">
          <DashboardLink to="/dashboard">
            <FaBookReader />
            Dashboard
          </DashboardLink>
          <DashboardLink to="/dashboard/services">
            <FaServicestack /> Servicios
          </DashboardLink>
          <DashboardLink to="/dashboard/servers">
            <FaServer />
            Servidores
          </DashboardLink>
          <DashboardLink to="/dashboard/failures">
            <FaTerminal />
            Fallas
          </DashboardLink>
          <DashboardLink to="/dashboard/profile">
            <FaUserAstronaut />
            Perfil
          </DashboardLink>
          {context.userInfo.is_admin && (
            <DashboardLink to="/dashboard/services">
              <FaUserCheck />
              Usuarios
            </DashboardLink>
          )}
        </aside>
        <aside className="w-full flex flex-col gap-4 p-4 m-2 mt-1 ml-1 rounded-xl md:bg-neutral-200/80 md:dark:bg-gray-900/40 overflow-y-auto">
          <Outlet />
        </aside>
      </div>
    );
  }

  return <Spinner />;
}
