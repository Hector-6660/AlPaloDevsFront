import React from "react";

// Obtener la franquicia de un juego por su ID
function getFranquiciaFromJuego(franquiciaId) {
    const apiUrl = `https://alpalodevs.net/api/v1/franquicias/${franquiciaId}`;

    // Realizar la solicitud GET al endpoint de franquicia del juego
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

export default getFranquiciaFromJuego;