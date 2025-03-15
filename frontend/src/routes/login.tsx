import { createFileRoute } from "@tanstack/react-router";
import Button from "../components/Button";
import { useAuthContext } from "../context/authContext";
import LoginForm from "../components/LoginForm";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const context = useAuthContext();

  return (
    <div className="md:pt-32">
      {!context?.userInfo.username ? (
        <LoginForm />
      ) : (
        <div className="d:bg-neutral-200/80 md:dark:bg-gray-900/40 py-16 rounded-xl min-w-120 h-svh md:h-auto flex flex-col items-center inset-shadow-blue md:justify-center gap-4">
          Sesión iniciada como {context.userInfo.username}
          <Button onClick={() => context.logOut()}>Cerrar Sesión</Button>
        </div>
      )}
    </div>
  );
}
