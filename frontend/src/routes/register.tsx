import { createFileRoute } from "@tanstack/react-router";
import Tittle from "../components/Tittle";
import Input from "../components/Input";
import Button from "../components/Button";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="md:pt-24">
      <form className="md:bg-neutral-200/80 md:dark:bg-gray-900/40 py-16 rounded-xl min-w-120 h-svh md:h-auto flex flex-col items-center inset-shadow-blue md:justify-center gap-4">
        <Tittle label="Registro" />
        <Input name="full-name" placeholder="Nombre" type="text" />
        <Input name="email" placeholder="Correo" type="email" />
        <Input name="password" placeholder="Contraseña" type="password" />
        <Input
          name="confirm-password"
          placeholder="Confirmar Contraseña"
          type="password"
        />
        <Button loading={false} onClick={() => {}}>
          Registrarme
        </Button>
      </form>
    </div>
  );
}
