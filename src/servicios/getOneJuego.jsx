import React from "react";

function getOneJuego(juegoId) {
    const apiUrl = `http://alpalodevs.test/api/v1/juegos/${juegoId}`;
    
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

export default getOneJuego;