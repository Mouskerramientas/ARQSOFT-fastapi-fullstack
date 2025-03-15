import { API_URL } from "../../config";

type validateLoginRequestT =
  | {
      access_token: string;
      token_type: string;
    }
  | undefined;

export const validateLoginRequest = async (
  username: string,
  password: string
): Promise<validateLoginRequestT> => {
  try {
    const credentials: { access_token: string; token_type: string } =
      await login(username, password);
    return credentials;
  } catch (error) {
    return undefined;
  }
};

const login = async (username: string, password: string) => {
  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  const response = await fetch(`${API_URL}/api/v1/login/access-token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};

type currentUserT = {
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  full_name: string;
  id: string;
};

export const testTokenRequest = async (
  token: string
): Promise<currentUserT | undefined> => {
  const response = await fetch(`${API_URL}/api/v1/login/test-token/`, {
    headers: { Authorization: `Bearer ${token}` },
    method: "POST",
  });
  if (!response.ok) {
    return undefined;
  }
  return response.json();
};
