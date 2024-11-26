// /src/services/api.js
const API_URL = "http://127.0.0.1:8000/";

// Registro de usuario
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

// Crear reserva
export const createReservation = async (reservationData) => {
  try {
    const response = await fetch(`${API_URL}reservations/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Agrega token si tu backend lo requiere
        // "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(reservationData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error al crear reserva:", errorData);
      throw new Error(errorData.detail || "Error desconocido");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en createReservation:", error);
    throw error;
  }
};



// Obtener reservas del usuario (carrito)
export const getUserReservations = async (userId) => {
  try {
    const response = await fetch(`${API_URL}reservations/user-reservations/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Incluye token si es necesario
        // "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error al obtener reservas:", errorData);
      throw new Error(errorData.detail || "Error desconocido");
    }

    return response.json();
  } catch (error) {
    console.error("Error al obtener las reservas:", error);
    throw error;
  }
};

