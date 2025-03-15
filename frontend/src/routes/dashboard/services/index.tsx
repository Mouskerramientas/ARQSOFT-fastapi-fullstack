import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import Title from "../../../components/Title";
import { useAuthContext } from "../../../context/authContext";
import { useEffect, useState } from "react";
import { fetchUserServices } from "../../../services/services/requests";
import Button from "../../../components/Button";
import { UserService } from "../../../types/services";

export const Route = createFileRoute("/dashboard/services/")({
  component: RouteComponent,
});

function RouteComponent() {
  const authContext = useAuthContext();

  const [userServices, setUserServices] = useState<UserService[]>([]);
  const [dataFetched, setDataFetched] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (authContext?.userToken) {
      fetchUserServices(authContext.userToken).then((response) => {
        setUserServices(response);
        setDataFetched(true);
        console.log(response);
      });
    }
  }, []);

  useEffect(() => {
    if (authContext?.userToken) {
      fetchUserServices(authContext.userToken).then((response) => {
        setUserServices(response);
        setDataFetched(true);
        console.log(response);
      });
    }
  }, [useAuthContext]);
  return (
    <>
      <Title label="Servicios" />
      {dataFetched && !userServices && <p>No hay servicios</p>}
      {userServices &&
        userServices.map((service) => (
          <div className="flex flex-row gap-4">
            <Link to="/dashboard/services/$id" params={{ id: service.id }}>
              <p>{service.nombre}</p>
            </Link>
            <p>{service.descripcion}</p>
            <p>{service.estado}</p>
          </div>
        ))}
      <div className="max-w-md">
        {/* {!isCreateRoute && ( */}
        <Button
          onClick={() => {
            navigate({ to: "/dashboard/services/create" });
          }}
        >
          Crear Servicio
        </Button>
        {/* )} */}
      </div>
    </>
  );
}
