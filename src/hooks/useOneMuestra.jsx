import React, { useState, useEffect } from "react";
import getOneMuestra from "../servicios/getOneMuestra";

function useOneMuestra(idMuestraPantalla) {
    const [muestra, setMuestra] = useState({});
    const [buscando, setBuscando] = useState(true);

    function obtenerMuestras() {
        setBuscando(true);

        getOneMuestra(idMuestraPantalla)
            .then(datosMuestra =>{
                setMuestra(datosMuestra);
                setBuscando(false);
            });
    }

    useEffect((obtenerMuestras), [idMuestraPantalla]);

    return {buscando, muestra};
}

export default useOneMuestra;