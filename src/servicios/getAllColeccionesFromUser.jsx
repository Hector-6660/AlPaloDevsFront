import React from "react";

// Obtener todas las colecciones de un usuario por su ID
function getAllColeccionesFromUser(userId) {
    const apiUrl = `https://alpalodevs.net/api/v1/usuarios/${userId}/colecciones`;

    // Realizar la solicitud GET al endpoint de colecciones del usuario
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

export default getAllColeccionesFromUser;