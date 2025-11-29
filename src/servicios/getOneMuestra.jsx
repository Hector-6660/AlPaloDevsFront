import React from "react";

// Obtener una muestra por su ID
function getOneMuestra(muestraId) {
    const apiUrl = `http://alpalodevs.test/api/v1/demos/${muestraId}`;

    // Realizar la solicitud GET al endpoint de la muestra
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

export default getOneMuestra;