import React, { useState, useEffect } from "react";
import getPersonajeFromFranquicia from "../servicios/getPersonajeFromFranquicia";

// Hook para obtener los personajes de una franquicia dado su ID
function usePersonajeFromFranquicia(idFranquiciaPantalla) {
    const [personajes, setPersonajes] = useState([]);
    const [buscando, setBuscando] = useState(true);

    // Función para obtener los personajes
    function obtenerPersonajes() {
        setBuscando(true);

        // Llamada al servicio para obtener los personajes
        getPersonajeFromFranquicia(idFranquiciaPantalla)
            .then(datosPersonajes =>{
                setPersonajes(datosPersonajes);
                setBuscando(false);
            });
    }

    // useEffect para ejecutar la obtención de los personajes cuando cambie el ID
    useEffect(obtenerPersonajes, [idFranquiciaPantalla]);

    return {buscando, personajes};
}

export default usePersonajeFromFranquicia;
