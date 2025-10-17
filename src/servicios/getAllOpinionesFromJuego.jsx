import React from "react";

function getAllOpinionesFromJuego(juegoId) {
    const apiUrl = `http://alpalodevs.test/api/v1/juegos/${juegoId}/opinions`;
    
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

export default getAllOpinionesFromJuego;