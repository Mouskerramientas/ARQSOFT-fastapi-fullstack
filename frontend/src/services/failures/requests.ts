import { API_URL } from "../../config";

export const fetchUserFailures = async (token: string) => {
  const response = await fetch(`${API_URL}/api/v1/failures/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
};

export const createFailure = async (
  token: string,
  name: string,
  description: string
) => {
  const response = await fetch(`${API_URL}/api/v1/failures/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: name,
      descripcion: description,
    }),
  });

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  return undefined;
};

export const getFailureById = async (token: string, id: string) => {
  const response = await fetch(`${API_URL}/api/v1/failures/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
};
