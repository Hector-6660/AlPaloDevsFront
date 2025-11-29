import React from "react";

// Obtener un juego por su ID
function getOneJuego(juegoId) {
    const apiUrl = `http://alpalodevs.test/api/v1/juegos/${juegoId}`;

    // Realizar la solicitud GET al endpoint del juego
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

export default getOneJuego;