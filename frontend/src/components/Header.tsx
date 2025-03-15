import { Link } from "@tanstack/react-router";
import Button from "./Button";
import SecondaryButton from "./SecondaryButton";
import Title from "./Title";
import { useAuthContext } from "../context/authContext";
import { useEffect } from "react";
import { FaUserAstronaut } from "react-icons/fa";

const Header = () => {
  const authContext = useAuthContext();

  useEffect(() => {
    if (authContext?.userToken) {
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
        <Title label="Servicio de Alerta de Fallas en Servidores"></Title>
      </Link>
      <div className="flex flex-row gap-4">
        {!authContext?.isValid && (
          <>
            <Link className="flex items-center justify-center" to="/register">
              <SecondaryButton onClick={() => {}}>Registrarse</SecondaryButton>
            </Link>
            <Link className="flex items-center justify-center" to="/login">
              <Button onClick={() => {}}>Iniciar Sesión</Button>
            </Link>
          </>
        )}
        {authContext?.isValid && (
          <>
            <SecondaryButton onClick={logOut}>Cerrar Sesión</SecondaryButton>
            <Button onClick={() => {}}>
              <FaUserAstronaut />
              {authContext.userInfo.username}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
