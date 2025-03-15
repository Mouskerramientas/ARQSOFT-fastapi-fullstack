import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { useAuthContext } from "../../../context/authContext";
import SecondaryButton from "../../../components/SecondaryButton";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { createServer } from "../../../services/servers/requests";

export const Route = createFileRoute("/dashboard/servers/create")({
  component: RouteComponent,
});

const serverSchema = z.object({
  name: z.string(),
});

function RouteComponent() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const authContext = useAuthContext();

  async function formAction(formData: FormData) {
    setLoading(true);
    const formValues = Object.fromEntries(formData);

    const data = serverSchema.safeParse(formValues);

    if (data.success && authContext) {
      const res = await createServer(authContext.userToken, data.data.name);

      if (res) {
        navigate({ to: "/dashboard/servers" });
      }
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-2 items-center justify-center md:w-120 dark:bg-gray-500/20 px-4 py-8 rounded-md">
      <SecondaryButton
        onClick={() => {
          navigate({ to: "/dashboard/services" });
        }}
      >
        Salir
      </SecondaryButton>
      <form
        className="flex flex-col gap-2 justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          formAction(formData);
        }}
      >
        <Input name="name" placeholder="Nombre" type="text" />
        <Button onClick={() => {}} loading={loading} type="submit">
          Crear
        </Button>
      </form>
    </div>
  );
}
