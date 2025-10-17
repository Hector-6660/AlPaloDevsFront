import React from "react";

function getAllDemos() {
    const apiUrl = `http://alpalodevs.test/api/v1/demos`;

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

export default getAllDemos;