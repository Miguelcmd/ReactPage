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
  
  console.log(response.status);
  
  if (!response.ok) {
    console.log(await response.json()); // Muestra el mensaje de error si es necesario
    throw new Error("Credenciales inválidas");
  }

  const data = await response.json();
  localStorage.setItem("username", data.username);
  return data; // Ahora solo retorna data correctamente
};


