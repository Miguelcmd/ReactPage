// /src/services/api.js
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

export const loginUser = async (loginData) => {
  const response = await fetch(`${API_URL}users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData)
  });
  if (!response.ok) {
    throw new Error("Credenciales inválidas");
  }
  return response.json();
};
