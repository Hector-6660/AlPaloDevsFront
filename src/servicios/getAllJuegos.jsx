import React from "react";

// Obtener todos los juegos
function getAllJuegos() {
    const apiUrl = `https://alpalodevs.net/api/juegos`;

    // Realizar la solicitud GET al endpoint de juegos
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

export default getAllJuegos;