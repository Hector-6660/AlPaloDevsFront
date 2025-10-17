import React, { useState, useEffect } from "react";
import getJuegoFromFranquicia from "../servicios/getJuegoFromFranquicia";

function useJuegoFromFranquicia(idFranquiciaPantalla) {
    const [franquicia, setFranquicia] = useState([]);
    const [buscando, setBuscando] = useState(true);

    function obtenerFranquicia() {
        setBuscando(true);

        getJuegoFromFranquicia(idFranquiciaPantalla)
            .then(datosFranquicia =>{
                setFranquicia(datosFranquicia);
                setBuscando(false);
            });
    }

    useEffect((obtenerFranquicia), [idFranquiciaPantalla]);

    return {buscando, franquicia};
}

export default useJuegoFromFranquicia;
