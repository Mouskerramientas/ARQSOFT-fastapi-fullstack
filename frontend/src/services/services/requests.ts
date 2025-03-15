import { API_URL } from "../../config";

export const fetchUserServices = async (token: string) => {
  const response = await fetch(`${API_URL}/api/v1/services/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
};

export const createService = async (
  token: string,
  name: string,
  description: string
) => {
  const response = await fetch(`${API_URL}/api/v1/services/`, {
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

export const getServiceById = async (token: string, id: string) => {
  const response = await fetch(`${API_URL}/api/v1/services/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
};

export const updateService = async (
  token: string,
  id: string,
  name: string,
  description: string,
  state: string
) => {
  const response = await fetch(`${API_URL}/api/v1/services/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: name,
      descripcion: description,
      estado: state,
    }),
  });

  const data = await response.json();

  return data;
};
