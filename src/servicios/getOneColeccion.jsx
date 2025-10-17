import React from "react";

function getOneColeccion(coleccionId) {
    const apiUrl = `http://alpalodevs.test/api/v1/coleccions/${coleccionId}`;

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