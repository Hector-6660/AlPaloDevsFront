import React from "react";

// Obtener una demo por su ID
function getOneDemo(demoId) {
    const apiUrl = `http://alpalodevs.test/api/v1/demos/${demoId}`;

    // Realizar la solicitud GET al endpoint de la demo
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

export default getOneDemo;