import React, { useState, useEffect } from "react";
import getJuegoFromFranquicia from "../servicios/getJuegoFromFranquicia";

// Hook para obtener los juegos de una franquicia dado su ID
function useJuegoFromFranquicia(idFranquiciaPantalla) {
    const [franquicia, setFranquicia] = useState([]);
    const [buscando, setBuscando] = useState(true);

    // Función para obtener los juegos de la franquicia
    function obtenerFranquicia() {
        setBuscando(true);

        // Llamada al servicio para obtener los juegos de la franquicia
        getJuegoFromFranquicia(idFranquiciaPantalla)
            .then(datosFranquicia =>{
                setFranquicia(datosFranquicia);
                setBuscando(false);
            });
    }

    // useEffect para ejecutar la obtención de la franquicia cuando cambie el ID
    useEffect((obtenerFranquicia), [idFranquiciaPantalla]);

    return {buscando, franquicia};
}

export default useJuegoFromFranquicia;
