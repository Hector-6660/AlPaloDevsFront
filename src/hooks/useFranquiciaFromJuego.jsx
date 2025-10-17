import React, { useState, useEffect } from "react";
import getFranquiciaFromJuego from "../servicios/getFranquiciaFromJuego";

function useFranquiciaFromJuego(idFranquiciaPantalla) {
    const [franquicia, setFranquicia] = useState({});
    const [buscando, setBuscando] = useState(true);

    function obtenerFranquicia() {
        setBuscando(true);

        getFranquiciaFromJuego(idFranquiciaPantalla)
            .then(datosFranquicia =>{
                setFranquicia(datosFranquicia);
                setBuscando(false);
            });
    }

    useEffect((obtenerFranquicia), [idFranquiciaPantalla]);

    return {buscando, franquicia};
}

export default useFranquiciaFromJuego;
