import React from "react";

function getAllPersonajes() {
    const apiUrl = `http://alpalodevs.test/api/v1/personajes`;

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

export default getAllPersonajes;