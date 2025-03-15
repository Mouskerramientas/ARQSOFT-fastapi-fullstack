import { createFileRoute, Link } from "@tanstack/react-router";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useAuthContext } from "../context/authContext";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const authContext = useAuthContext();

  return (
    <div className="max-w-[80%] md:max-w-[60%] md:mt-24 flex flex-col items-center gap-4">
      <div className="flex flex-row gap-8">
        <div className="flex-2 flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl text-center">
            <span className="font-bold text-4xl">
              Monitoreo y Notificación de Errores en Servidores
            </span>
            <br />
            Minimiza el Tiempo de Inactividad y Maximiza la Disponibilidad
          </h1>
          {authContext?.userInfo.username ? (
            <Link to="/dashboard">
              <Button onClick={() => {}}>Ir al Dashboard</Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button onClick={() => {}}>Prueba Ahora</Button>
            </Link>
          )}
        </div>
        <div className="hidden md:flex md:flex-1 w-64">
          <img className="w-64 h-64" src="/navegador.png" alt="Server" />
        </div>
      </div>
      <p className="text-center text-sm">
        Detección temprana, clasificación inteligente y notificaciones
        inmediatas para garantizar la continuidad de tus servicios
      </p>
      <div className="px-8 py-6 mt-24 rounded-xl dark:bg-gray-900/40">
        <p className="text-center">
          Cada minuto de inactividad en tus servidores puede generar pérdidas
          económicas y dañar la reputación de tu empresa. Los sistemas de
          monitoreo tradicionales son lentos y no ofrecen la rapidez y precisión
          que necesitas
        </p>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <div className="hidden md:flex w-64">
          <img src="/servidor.png" />
        </div>
        <p className="">
          Nuestro sistema de monitoreo automatizado detecta, clasifica y
          notifica errores en tiempo real, permitiendo a tu equipo actuar
          rápidamente y minimizar el impacto de los fallos
        </p>
      </div>
      <Footer />
    </div>
  );
}
