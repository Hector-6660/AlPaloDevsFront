import React, { useState, useEffect } from "react";
import getOneFranquicia from "../servicios/getOneFranquicia";

// Hook para obtener una franquicia dado su ID
function useOneFranquicia(idFranquiciaPantalla) {
    const [franquicia, setFranquicia] = useState({});
    const [buscando, setBuscando] = useState(true);

    // Función para obtener la franquicia
    function obtenerFranquicias() {
        setBuscando(true);

        // Llamada al servicio para obtener la franquicia
        getOneFranquicia(idFranquiciaPantalla)
            .then(datosFranquicia =>{
                setFranquicia(datosFranquicia);
                setBuscando(false);
            });
    }

    // useEffect para ejecutar la obtención de la franquicia cuando cambie el ID
    useEffect((obtenerFranquicias), [idFranquiciaPantalla]);

    return {buscando, franquicia};
}

export default useOneFranquicia;