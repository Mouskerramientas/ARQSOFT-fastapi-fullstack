import { useState } from "react";
import { userSessionT } from "../types/auth";

export const useAuth = () => {
  const initialState = (): userSessionT => {
    const userSession = localStorage.getItem("user-session") || "";
    if (userSession) {
      const { token, username } = JSON.parse(userSession);
      return {
        token,
        username,
      };
    }
    return {
      token: "",
      username: "",
    };
  };

  const [userSession, setUserSession] = useState<userSessionT>(initialState);

  const login = (username: string, password: string) => {
    console.log(`Logging user ${username} with password ${password}`);
    // TODO: Validate login
    // If login valid
    setUserSession({
      token: "1234",
      username: "Daniv",
    });
    localStorage.setItem(
      "user-session",
      JSON.stringify({
        token: "1234",
        username: "Daniv",
      })
    );
    return true;
  };

  const validateLogin = () => {
    return false;
  };

  return {
    userToken: userSession.token,
    username: userSession.username,
    login,
    validateLogin,
  };
};
