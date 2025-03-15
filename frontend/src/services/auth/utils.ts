import { signupRequest } from "./requests";

export const registerUser = async (
  full_name: string,
  email: string,
  password: string
) => {
  const res = await signupRequest(full_name, email, password);

  return res;
};
