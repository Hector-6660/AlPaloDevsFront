import React, { useState, useEffect } from "react";
import getOneDemo from "../servicios/getOneDemo";

function useOneDemo(idDemoPantalla) {
    const [demo, setDemo] = useState({});
    const [buscando, setBuscando] = useState(true);

    function obtenerDemos() {
        setBuscando(true);

        getOneDemo(idDemoPantalla)
            .then(datosDemo =>{
                setDemo(datosDemo);
                setBuscando(false);
            });
    }

    useEffect((obtenerDemos), [idDemoPantalla]);

    return {buscando, demo};
}

export default useOneDemo;