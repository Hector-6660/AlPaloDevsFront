import React, { useState, useEffect } from "react";
import getFranquiciaFromJuego from "../servicios/getFranquiciaFromJuego";

// Hook para obtener la franquicia de un juego dado su ID
function useFranquiciaFromJuego(idFranquiciaPantalla) {
    const [franquicia, setFranquicia] = useState({});
    const [buscando, setBuscando] = useState(true);

    // Función para obtener la franquicia
    function obtenerFranquicia() {
        setBuscando(true);

        // Llamada al servicio para obtener la franquicia
        getFranquiciaFromJuego(idFranquiciaPantalla)
            .then(datosFranquicia =>{
                setFranquicia(datosFranquicia);
                setBuscando(false);
            });
    }

    // useEffect para ejecutar la obtención de la franquicia cuando cambie el ID
    useEffect((obtenerFranquicia), [idFranquiciaPantalla]);

    return {buscando, franquicia};
}

export default useFranquiciaFromJuego;
