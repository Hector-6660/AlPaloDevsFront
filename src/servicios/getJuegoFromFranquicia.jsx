import React from "react";

// Obtener el juego de una franquicia por su ID
function getJuegoFromFranquicia(franquiciaId) {
    const apiUrl = `http://alpalodevs.test/api/v1/juegos/${franquiciaId}/franquicia`;

    // Realizar la solicitud GET al endpoint de juego de la franquicia
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

export default getJuegoFromFranquicia;