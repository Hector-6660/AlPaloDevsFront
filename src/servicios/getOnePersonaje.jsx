import React from "react";

function getOnePersonaje(personajeId) {
    const apiUrl = `http://alpalodevs.test/api/v1/personaje/${personajeId}`;
    
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

export default getOnePersonaje;