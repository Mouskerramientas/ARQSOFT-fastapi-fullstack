import { createFileRoute, useNavigate } from "@tanstack/react-router";
import SecondaryButton from "../../../components/SecondaryButton";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { z } from "zod";
import { useState } from "react";
import { useAuthContext } from "../../../context/authContext";
import { createService } from "../../../services/services/requests";

export const Route = createFileRoute("/dashboard/services/create")({
  component: RouteComponent,
});

const serviceSchema = z.object({
  name: z.string(),
  description: z.string(),
});

function RouteComponent() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const authContext = useAuthContext();

  async function formAction(formData: FormData) {
    setLoading(true);
    const formValues = Object.fromEntries(formData);

    const data = serviceSchema.safeParse(formValues);

    if (data.success && authContext) {
      // const res = await context.login(data.data.username, data.data.password);

      const res = await createService(
        authContext.userToken,
        data.data.name,
        data.data.description
      );

      if (res) {
        navigate({ to: "/dashboard/services" });
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
        <Input name="description" placeholder="Descripción" type="text" />
        <Button onClick={() => {}} loading={loading} type="submit">
          Crear
        </Button>
      </form>
    </div>
  );
}
