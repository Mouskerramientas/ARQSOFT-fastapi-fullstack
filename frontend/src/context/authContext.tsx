import { createContext, useContext } from "react";
import { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import { useAuthT } from "../types/auth";

const AuthContext = createContext<useAuthT | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { userToken, username, login, validateLogin } = useAuth();

  return (
    <AuthContext.Provider value={{ userToken, username, login, validateLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
