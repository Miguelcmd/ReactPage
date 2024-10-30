// src/services/api.js
const API_URL = "http://127.0.0.1:8000/";

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
  return response.json();
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Error en la autenticación");
  }

  return response.json(); // Devuelve el token u otro dato de la API
};
