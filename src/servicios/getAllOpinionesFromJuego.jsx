import React from "react";

// Obtener todas las opiniones de un juego
function getAllOpinionesFromJuego(juegoId) {
    const apiUrl = `https://alpalodevs.net/api/v1/juegos/${juegoId}/opinions`;

    // Realizar la solicitud GET al endpoint de opiniones del juego
    return fetch(apiUrl)
        .then((response) => response.json())
        .then (response => {
            const data = response;
            return (data);
        })
        .catch(err => {
            return ({});
        });
}

export default getAllOpinionesFromJuego;