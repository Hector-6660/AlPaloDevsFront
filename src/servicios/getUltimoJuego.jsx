import React from "react";

// Obtener el último juego agregado
export async function getUltimoJuego() {
  const apiUrl = "https://alpalodevs.net/api/v1/juegos/ultimo";

  // Realizar la solicitud GET al endpoint del último juego
  const res = await fetch(apiUrl);
  if (!res.ok) throw new Error("Error al obtener el último juego");

  return await res.json();
}
