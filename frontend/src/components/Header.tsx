import { Link } from "@tanstack/react-router";
import Button from "./Button";
import SecondaryButton from "./SecondaryButton";
import Tittle from "./Tittle";
import { useAuthContext } from "../context/authContext";
import { useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const authContext = useAuthContext();

  useEffect(() => {
    if (authContext) {
      authContext.testToken();
    }
  }, []);

  const logOut = () => {
    if (authContext) {
      authContext.logOut();
    }
  };

  return (
    <div className="w-full py-2 px-4 flex flex-row items-center justify-between">
      <Link className="flex items-center justify-center" to="/">
        <Tittle label="Servicio de Alerta de Fallas en Servidores"></Tittle>
      </Link>
      <div className="flex flex-row gap-4">
        {!authContext?.userInfo.username && (
          <>
            <Link className="flex items-center justify-center" to="/register">
              <SecondaryButton label="Registrarse" onClick={() => {}} />
            </Link>
            <Link className="flex items-center justify-center" to="/login">
              <Button onClick={() => {}}>Iniciar Sesión</Button>
            </Link>
          </>
        )}
        {authContext?.userInfo.username && (
          <>
            <SecondaryButton label="Cerrar Sesión" onClick={logOut} />
            <Button onClick={() => {}}>
              <FaUser />
              {authContext.userInfo.username}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
