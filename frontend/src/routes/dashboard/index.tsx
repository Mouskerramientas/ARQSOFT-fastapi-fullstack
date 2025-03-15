import { createFileRoute } from "@tanstack/react-router";
import Title from "../../components/Title";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Title label="Bienvenido al Panel de Monitoreo de Servidores" />
      <p>
        Este dashboard proporciona una visión integral del estado de tus
        servidores, ofreciendo detección temprana de errores, clasificación
        automática por criticidad y notificaciones en tiempo real. Optimiza la
        gestión de incidencias y asegura la alta disponibilidad de tus sistemas.
      </p>
    </div>
  );
}
