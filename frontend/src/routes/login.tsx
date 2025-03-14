import { createFileRoute } from "@tanstack/react-router";
import Spinner from "../components/Spinner";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="md:dark:bg-gray-900/40 py-16 rounded-xl min-w-120 h-svh md:h-auto flex flex-col items-center inset-shadow-blue justify-center">
      <h1 className="font-bold text-xl">Inicio de Sesión</h1>
      <input
        className="px-4 py-2 mt-4  rounded-md dark:bg-neutral-100/10 hover:bg-neutral-100/20 duration-300"
        placeholder="Usuario"
      />
      <input
        className="px-4 py-2 my-4 rounded-md dark:bg-neutral-100/10 hover:bg-neutral-100/20 duration-300"
        type="password"
        placeholder="Contraseña"
      />
      <button className="flex flex-row items-center py-2 px-4 font-bold rounded-md hover:cursor-pointer bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-neutral-200 duration-300">
        <Spinner />
        Iniciar Sesión
      </button>
    </div>
  );
}
