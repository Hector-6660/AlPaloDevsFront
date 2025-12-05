import React from "react";

// Obtener todas las franquicias
function getAllFranquicias() {
    const apiUrl = `https://alpalodevs.net/api/v1/franquicias`;

    // Realizar la solicitud GET al endpoint de franquicias
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

export default getAllFranquicias;