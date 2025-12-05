import React from "react";

// Obtener una franquicia por su ID
function getOneFranquicia(franquiciaId) {
    const apiUrl = `https://alpalodevs.net/api/v1/franquicias/${franquiciaId}`;

    // Realizar la solicitud GET al endpoint de la franquicia
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

export default getOneFranquicia;