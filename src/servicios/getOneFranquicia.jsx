import React from "react";

function getOneFranquicia(franquiciaId) {
    const apiUrl = `http://alpalodevs.test/api/v1/franquicias/${franquiciaId}`;

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

export default getOneFranquicia;