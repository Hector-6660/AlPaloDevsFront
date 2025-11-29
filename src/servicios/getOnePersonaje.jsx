import React from "react";

// Obtener un personaje por su ID
function getOnePersonaje(personajeId) {
    const apiUrl = `http://alpalodevs.test/api/v1/personajes/${personajeId}`;

    // Realizar la solicitud GET al endpoint del personaje
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

export default getOnePersonaje;