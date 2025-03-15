import {
  createFileRoute,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
import { failure } from "../../../types/failures";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/authContext";
import { getFailureById } from "../../../services/failures/requests";
import SecondaryButton from "../../../components/SecondaryButton";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export const Route = createFileRoute("/dashboard/failures/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = useParams({ from: "/dashboard/failures/$id" });

  const [failure, setFailure] = useState<failure | null>(null);

  const [loading, setLoading] = useState(false);

  const authContext = useAuthContext();

  const navigate = useNavigate();

  const getServerInfo = async () => {
    if (!authContext) return;
    await getFailureById(authContext.userToken, id).then((response) => {
      console.log(response);
      setFailure(response);
    });
  };

  useEffect(() => {
    getServerInfo();
  }, [id]);

  return (
    <div className="flex flex-col gap-2 items-center justify-center md:w-120 dark:bg-gray-500/20 px-4 py-8 rounded-md">
      <SecondaryButton
        onClick={() => {
          navigate({ to: "/dashboard/services" });
        }}
      >
        Salir
      </SecondaryButton>
      {failure?.nombre && (
        <form
          className="flex flex-col gap-2 justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            name="name"
            placeholder="Nombre"
            type="text"
            value={failure.nombre}
          />
          <Input
            name="description"
            placeholder="Descripcion"
            value={failure.descripcion}
            type="text"
          />
          <Button onClick={() => {}} loading={loading} type="submit">
            Guardar
          </Button>
        </form>
      )}
    </div>
  );
}
