import React from "react";

function getAllColeccionesFromUser(userId) {
    const apiUrl = `http://alpalodevs.test/api/v1/usuarios/${userId}/colecciones`;

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

export default getAllColeccionesFromUser;