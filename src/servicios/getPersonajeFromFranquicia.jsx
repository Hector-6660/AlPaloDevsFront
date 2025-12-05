import React from "react";

// Obtener personajes de una franquicia por su ID
function getPersonajeFromFranquicia(franquiciaId) {
    const apiUrl = `https://alpalodevs.net/api/v1/franquicias/${franquiciaId}/personajes`;

    // Realizar la solicitud GET al endpoint de personajes de la franquicia
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

export default getPersonajeFromFranquicia;