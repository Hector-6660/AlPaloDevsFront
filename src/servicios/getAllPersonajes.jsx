import React from "react";

// Obtener todos los personajes
function getAllPersonajes() {
    const apiUrl = `https://alpalodevs.net/api/v1/personajes`;

    // Realizar la solicitud GET al endpoint de personajes
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

export default getAllPersonajes;