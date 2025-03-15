import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useAuthContext } from "../../../context/authContext";
import { useEffect, useState } from "react";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import { failure } from "../../../types/failures";
import { fetchUserFailures } from "../../../services/failures/requests";

export const Route = createFileRoute("/dashboard/failures/")({
  component: RouteComponent,
});

function RouteComponent() {
  const authContext = useAuthContext();

  const [userFailures, setUserFailures] = useState<failure[]>([]);
  const [dataFetched, setDataFetched] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (authContext?.userToken) {
      fetchUserFailures(authContext.userToken).then((response) => {
        setUserFailures(response);
        setDataFetched(true);
        console.log(response);
      });
    }
  }, []);

  useEffect(() => {
    if (authContext?.userToken) {
      fetchUserFailures(authContext.userToken).then((response) => {
        setUserFailures(response);
        setDataFetched(true);
        console.log(response);
      });
    }
  }, [useAuthContext]);
  return (
    <>
      <Title label="Fallas" />
      {dataFetched && userFailures.length === 0 && <p>No hay fallas :)</p>}
      {userFailures &&
        userFailures.map((service) => (
          <div className="flex flex-row gap-4">
            <Link to="/dashboard/failures/$id" params={{ id: service.id }}>
              <p>{service.nombre}</p>
            </Link>
          </div>
        ))}
    </>
  );
}
