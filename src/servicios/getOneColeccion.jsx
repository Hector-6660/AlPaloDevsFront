import React from "react";

// Obtener una colección por su ID
function getOneColeccion(coleccionId) {
    const apiUrl = `http://alpalodevs.test/api/v1/coleccions/${coleccionId}`;

    // Realizar la solicitud GET al endpoint de la colección
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

export default getOneColeccion;