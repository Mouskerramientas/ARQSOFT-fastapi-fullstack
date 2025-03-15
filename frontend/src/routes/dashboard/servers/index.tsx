import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useAuthContext } from "../../../context/authContext";
import { useEffect, useState } from "react";
import { server } from "../../../types/servers";
import { fetchUserServers } from "../../../services/servers/requests";
import Title from "../../../components/Title";
import Button from "../../../components/Button";

export const Route = createFileRoute("/dashboard/servers/")({
  component: RouteComponent,
});

function RouteComponent() {
  const authContext = useAuthContext();

  const [userServices, setUserServices] = useState<server[]>([]);
  const [dataFetched, setDataFetched] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (authContext?.userToken) {
      fetchUserServers(authContext.userToken).then((response) => {
        setUserServices(response);
        setDataFetched(true);
        console.log(response);
      });
    }
  }, []);

  useEffect(() => {
    if (authContext?.userToken) {
      fetchUserServers(authContext.userToken).then((response) => {
        setUserServices(response);
        setDataFetched(true);
        console.log(response);
      });
    }
  }, [useAuthContext]);
  return (
    <>
      <Title label="Servicios" />
      {dataFetched && !userServices && <p>No hay servidores</p>}
      {userServices &&
        userServices.map((service) => (
          <div className="flex flex-row gap-4">
            <Link to="/dashboard/servers/$id" params={{ id: service.id }}>
              <p>{service.nombre}</p>
            </Link>
          </div>
        ))}
      <div className="max-w-md">
        {/* {!isCreateRoute && ( */}
        <Button
          onClick={() => {
            navigate({ to: "/dashboard/servers/create" });
          }}
        >
          Crear Servidor
        </Button>
        {/* )} */}
      </div>
    </>
  );
}
