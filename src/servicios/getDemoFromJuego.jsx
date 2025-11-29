import React from "react";

// Obtener la demo de un juego por su ID
function getDemoFromJuego(juegoId) {
    const apiUrl = `http://alpalodevs.test/api/v1/juegos/${juegoId}/demos`;

    // Realizar la solicitud GET al endpoint de demos del juego
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

export default getDemoFromJuego;