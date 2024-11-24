import React, { useState } from "react";
import { createReservation } from "../services/api";

const ReservationForm = ({ userId }) => {
  const [hotelName, setHotelName] = useState("");
  const [nights, setNights] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleReservation = async () => {
    const reservationData = {
      user_id: userId, // Proporcionado desde el contexto o props
      hotel_name: hotelName,
      nights: nights,
      total_price: totalPrice,
    };

    try {
      const response = await createReservation(reservationData);
      alert("Reserva creada exitosamente: " + JSON.stringify(response));
    } catch (error) {
      console.error(error.message);
      alert("Error al crear la reserva: " + error.message);
    }
  };

  return (
    <div>
      <h2>Hacer una reserva</h2>
      <input
        type="text"
        placeholder="Nombre del hotel"
        value={hotelName}
        onChange={(e) => setHotelName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número de noches"
        value={nights}
        onChange={(e) => setNights(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Precio total"
        value={totalPrice}
        onChange={(e) => setTotalPrice(parseFloat(e.target.value))}
      />
      <button onClick={handleReservation}>Reservar</button>
    </div>
  );
};

export default ReservationForm;
