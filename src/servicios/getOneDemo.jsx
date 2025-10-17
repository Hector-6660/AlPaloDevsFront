import React from "react";

function getOneDemo(demoId) {
    const apiUrl = `http://alpalodevs.test/api/v1/demos/${demoId}`;

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

export default getOneDemo;