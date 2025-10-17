import { useState, useEffect } from "react";
import getDemoFromJuego from "../servicios/getDemoFromJuego";

function useDemoFromJuego(idJuegoPantalla, tieneDemo) {
    const [demo, setDemo] = useState({});
    const [buscando, setBuscando] = useState(false);

    useEffect(() => {
        if (!tieneDemo || !idJuegoPantalla) {
            // Si no tiene demo, no buscamos nada
            setDemo({});
            setBuscando(false);
            return;
        }

        setBuscando(true);
        getDemoFromJuego(idJuegoPantalla).then(datosDemo => {
            setDemo(datosDemo);
            setBuscando(false);
        });
    }, [idJuegoPantalla, tieneDemo]);

    return { buscando, demo };
}

export default useDemoFromJuego;
