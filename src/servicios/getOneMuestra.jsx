import React from "react";

function getOneMuestra(muestraId) {
    const apiUrl = `http://alpalodevs.test/api/v1/muestras/${muestraId}`;

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

export default getOneMuestra;