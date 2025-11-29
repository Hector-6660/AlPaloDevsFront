import React, { useState, useEffect } from "react";
import getOneDemo from "../servicios/getOneDemo";

// Hook para obtener un demo dado su ID
function useOneDemo(idDemoPantalla) {
    const [demo, setDemo] = useState({});
    const [buscando, setBuscando] = useState(true);

    // Función para obtener el demo
    function obtenerDemos() {
        setBuscando(true);

        // Llamada al servicio para obtener el demo
        getOneDemo(idDemoPantalla)
            .then(datosDemo =>{
                setDemo(datosDemo);
                setBuscando(false);
            });
    }

    // useEffect para ejecutar la obtención del demo cuando cambie el ID
    useEffect((obtenerDemos), [idDemoPantalla]);

    return {buscando, demo};
}

export default useOneDemo;