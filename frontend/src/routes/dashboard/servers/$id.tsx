import {
  createFileRoute,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { server } from "../../../types/servers";
import { useAuthContext } from "../../../context/authContext";
import {
  getServerById,
  updateServer,
} from "../../../services/servers/requests";
import SecondaryButton from "../../../components/SecondaryButton";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export const Route = createFileRoute("/dashboard/servers/$id")({
  component: RouteComponent,
});

const serverSchema = z.object({
  name: z.string(),
});

function RouteComponent() {
  const { id } = useParams({ from: "/dashboard/servers/$id" });

  const [server, setServer] = useState<server | null>(null);

  const [loading, setLoading] = useState(false);

  const authContext = useAuthContext();

  const navigate = useNavigate();

  const getServerInfo = async () => {
    if (!authContext) return;
    await getServerById(authContext.userToken, id).then((response) => {
      console.log(response);
      setServer(response);
    });
  };

  useEffect(() => {
    getServerInfo();
  }, [id]);

  async function formAction(formData: FormData) {
    setLoading(true);
    const formValues = Object.fromEntries(formData);

    const data = serverSchema.safeParse(formValues);

    console.log("Boton presionado");

    if (data.success && authContext) {
      console.log("Enviando peticion");
      const res = await updateServer(authContext.userToken, id, data.data.name);
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
      {server?.nombre && (
        <form
          className="flex flex-col gap-2 justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            formAction(formData);
          }}
        >
          <Input
            name="name"
            placeholder="Nombre"
            type="text"
            value={server.nombre}
          />
          <Button onClick={() => {}} loading={loading} type="submit">
            Guardar
          </Button>
        </form>
      )}
    </div>
  );
}
