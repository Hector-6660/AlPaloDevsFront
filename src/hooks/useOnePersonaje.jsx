import React, { useState, useEffect } from "react";
import getOnePersonaje from "../servicios/getOnePersonaje";

function useOnePersonaje(idPersonajePantalla) {
    const [personaje, setPersonaje] = useState({});
    const [buscando, setBuscando] = useState(true);

    function obtenerPersonajes() {
        setBuscando(true);

        getOnePersonaje(idPersonajePantalla)
            .then(datosPersonaje =>{
                setPersonaje(datosPersonaje);
                setBuscando(false);
            });
    }

    useEffect((obtenerPersonajes), [idPersonajePantalla]);

    return {buscando, personaje};
}

export default useOnePersonaje;