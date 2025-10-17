import React from "react";

function getAllJuegos() {
    const apiUrl = `http://alpalodevs.test/api/juegos`;

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

export default getAllJuegos;