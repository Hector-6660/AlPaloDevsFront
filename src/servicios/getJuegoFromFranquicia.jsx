import React from "react";

function getJuegoFromFranquicia(franquiciaId) {
    const apiUrl = `http://alpalodevs.test/api/v1/juegos/${franquiciaId}/franquicia`;
    
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

export default getJuegoFromFranquicia;