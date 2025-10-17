import React, { useState, useEffect } from "react";
import getPersonajeFromFranquicia from "../servicios/getPersonajeFromFranquicia";

function usePersonajeFromFranquicia(idFranquiciaPantalla) {
    const [personajes, setPersonajes] = useState([]);
    const [buscando, setBuscando] = useState(true);

    function obtenerPersonajes() {
        setBuscando(true);

        getPersonajeFromFranquicia(idFranquiciaPantalla)
            .then(datosPersonajes =>{
                setPersonajes(datosPersonajes);
                setBuscando(false);
            });
    }

    useEffect(obtenerPersonajes, [idFranquiciaPantalla]);

    return {buscando, personajes};
}

export default usePersonajeFromFranquicia;
