import React from "react";

function getPersonajeFromFranquicia(franquiciaId) {
    const apiUrl = `http://alpalodevs.test/api/v1/franquicias/${franquiciaId}/personajes`;

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

export default getPersonajeFromFranquicia;