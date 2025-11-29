import React, { useState, useEffect } from "react";
import getOneMuestra from "../servicios/getOneMuestra";

// Hook para obtener una muestra dado su ID
function useOneMuestra(idMuestraPantalla) {
    const [muestra, setMuestra] = useState({});
    const [buscando, setBuscando] = useState(true);

    // Función para obtener las muestras
    function obtenerMuestras() {
        setBuscando(true);

        // Llamada al servicio para obtener la muestra
        getOneMuestra(idMuestraPantalla)
            .then(datosMuestra =>{
                setMuestra(datosMuestra);
                setBuscando(false);
            });
    }

    // useEffect para ejecutar la obtención de la muestra cuando cambie el ID
    useEffect((obtenerMuestras), [idMuestraPantalla]);

    return {buscando, muestra};
}

export default useOneMuestra;