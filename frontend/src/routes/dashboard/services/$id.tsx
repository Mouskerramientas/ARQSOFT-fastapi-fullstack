import {
  createFileRoute,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/authContext";
import {
  getServiceById,
  updateService,
} from "../../../services/services/requests";
import { UserService } from "../../../types/services";
import SecondaryButton from "../../../components/SecondaryButton";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { z } from "zod";

export const Route = createFileRoute("/dashboard/services/$id")({
  component: RouteComponent,
});

const serviceSchema = z.object({
  name: z.string(),
  description: z.string(),
  state: z.string(),
});

function RouteComponent() {
  const { id } = useParams({ from: "/dashboard/services/$id" });

  const [service, setService] = useState<UserService | null>(null);

  const [loading, setLoading] = useState(false);

  const authContext = useAuthContext();

  const navigate = useNavigate();

  const getServiceInfo = async () => {
    if (!authContext) return;
    await getServiceById(authContext.userToken, id).then((response) => {
      console.log(response);
      setService(response);
    });
  };

  useEffect(() => {
    getServiceInfo();
  }, [id]);

  async function formAction(formData: FormData) {
    setLoading(true);
    const formValues = Object.fromEntries(formData);

    const data = serviceSchema.safeParse(formValues);

    console.log("Boton presionado");

    if (data.success && authContext) {
      console.log("Enviando peticion");
      const res = await updateService(
        authContext.userToken,
        id,
        data.data.name,
        data.data.description,
        data.data.state
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
      {service?.nombre && (
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
            value={service.nombre}
          />
          <Input
            name="description"
            placeholder="Descripción"
            type="text"
            value={service.descripcion}
          />
          <Input
            name="state"
            placeholder="Estado"
            type="text"
            value={service.estado}
          />
          <Button onClick={() => {}} loading={loading} type="submit">
            Guardar
          </Button>
        </form>
      )}
    </div>
  );
}
