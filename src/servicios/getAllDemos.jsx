import React from "react";

// Obtener todas las demos
function getAllDemos() {
    const apiUrl = `https://alpalodevs.net/api/v1/demos`;

    // Realizar la solicitud GET al endpoint de demos
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

export default getAllDemos;