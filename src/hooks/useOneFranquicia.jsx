import React, { useState, useEffect } from "react";
import getOneFranquicia from "../servicios/getOneFranquicia";

function useOneFranquicia(idFranquiciaPantalla) {
    const [franquicia, setFranquicia] = useState({});
    const [buscando, setBuscando] = useState(true);

    function obtenerFranquicias() {
        setBuscando(true);

        getOneFranquicia(idFranquiciaPantalla)
            .then(datosFranquicia =>{
                setFranquicia(datosFranquicia);
                setBuscando(false);
            });
    }

    useEffect((obtenerFranquicias), [idFranquiciaPantalla]);

    return {buscando, franquicia};
}

export default useOneFranquicia;