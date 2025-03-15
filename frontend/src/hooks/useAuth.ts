import { useState } from "react";
import {
  testTokenRequest,
  validateLoginRequest,
} from "../services/auth/requests";
import { userInfoT } from "../types/auth";

export const useAuth = () => {
  const initialState = () => {
    const session = localStorage.getItem("sessionToken");
    if (session) {
      return session;
    }
    return "";
  };

  const [sessionToken, setSessionToken] = useState<string>(initialState);
  const [userInfo, setUserInfo] = useState<userInfoT>({
    username: "",
    is_admin: false,
  });
  const [isValid, setIsValid] = useState<boolean>(false);

  const login = async (username: string, password: string) => {
    console.log(`Logging user ${username} with password ${password}`);

    const validLogin = await validateLoginRequest(username, password);

    if (!validLogin) {
      return false;
    }

    setSessionToken(validLogin.access_token);
    localStorage.setItem("sessionToken", validLogin.access_token);

    await testToken(validLogin.access_token);

    return true;
  };

  const testToken = async (token = sessionToken) => {
    console.log(`Testing token ${token}`);
    const validToken = await testTokenRequest(token);
    if (validToken) {
      setUserInfo({
        username: validToken.full_name,
        is_admin: validToken.is_superuser,
      });
      setIsValid(true);
    }
  };

  const logOut = () => {
    setSessionToken("");
    localStorage.removeItem("sessionToken");
    setUserInfo({ username: "", is_admin: false });
    setIsValid(false);
  };

  return {
    userToken: sessionToken,
    userInfo: userInfo,
    isValid: isValid,
    login,
    testToken,
    logOut,
  };
};
