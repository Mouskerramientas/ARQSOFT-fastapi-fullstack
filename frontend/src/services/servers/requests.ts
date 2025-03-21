import { API_URL } from "../../config";

export const fetchUserServers = async (token: string) => {
  const response = await fetch(`${API_URL}/api/v1/servers/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
};

export const createServer = async (token: string, name: string) => {
  const response = await fetch(`${API_URL}/api/v1/servers/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: name,
    }),
  });

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  return undefined;
};

export const getServerById = async (token: string, id: string) => {
  const response = await fetch(`${API_URL}/api/v1/servers/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
};

export const updateServer = async (token: string, id: string, name: string) => {
  const response = await fetch(`${API_URL}/api/v1/servers/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: name,
    }),
  });

  const data = await response.json();

  return data;
};
