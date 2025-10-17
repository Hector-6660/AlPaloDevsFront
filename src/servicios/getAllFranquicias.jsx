import React from "react";

function getAllFranquicias() {
    const apiUrl = `http://alpalodevs.test/api/v1/franquicias`;

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

export default getAllFranquicias;