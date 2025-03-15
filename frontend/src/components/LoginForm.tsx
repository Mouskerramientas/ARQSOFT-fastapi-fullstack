import { z } from "zod";
import Button from "./Button";
import Input from "./Input";
import Tittle from "./Tittle";
import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { useNavigate } from "@tanstack/react-router";

const loginSchema = z.object({
  username: z.string().email(),
  password: z.string(),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const context = useAuthContext();

  const navigate = useNavigate();

  const [error, setError] = useState("");

  async function formAction(formData: FormData) {
    setLoading(true);
    const formValues = Object.fromEntries(formData);

    const data = loginSchema.safeParse(formValues);

    if (data.success && context) {
      const res = await context.login(data.data.username, data.data.password);
      if (res) {
        setError("");
        navigate({ to: "/dashboard" });
      } else {
        setError("Usuario o contraseña incorrectos");
      }
    }

    setLoading(false);
  }
  return (
    <form
      className="md:bg-neutral-200/80 md:dark:bg-gray-900/40 py-16 rounded-xl min-w-120 h-svh md:h-auto flex flex-col items-center inset-shadow-blue md:justify-center gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        await formAction(new FormData(e.target as HTMLFormElement));
      }}
    >
      <Tittle label="Inicio de Sesión" />
      <Input name="username" placeholder="Usuario" type="email" />
      <Input name="password" placeholder="Contraseña" type="password" />
      {error && (
        <div className="text-red-500 text-sm bg-red-300/20 px-2 py rounded-md">
          {error}
        </div>
      )}
      <Button loading={loading} type="submit" onClick={() => {}}>
        Iniciar Sesión
      </Button>
    </form>
  );
};

export default LoginForm;
