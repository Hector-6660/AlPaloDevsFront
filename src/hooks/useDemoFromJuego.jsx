import { useState, useEffect } from "react";
import getDemoFromJuego from "../servicios/getDemoFromJuego";

// Hook para obtener la demo de un juego dado su ID y si tiene demo
function useDemoFromJuego(idJuegoPantalla, tieneDemo) {
    const [demo, setDemo] = useState({});
    const [buscando, setBuscando] = useState(false);

    // useEffect para ejecutar la obtención de la demo cuando cambien el ID del juego o si tiene demo
    useEffect(() => {
        if (!tieneDemo || !idJuegoPantalla) {
            // Si no tiene demo, no buscamos nada
            setDemo({});
            setBuscando(false);
            return;
        }

        setBuscando(true);
        // Llamamos a la función para obtener la demo
        getDemoFromJuego(idJuegoPantalla).then(datosDemo => {
            setDemo(datosDemo);
            setBuscando(false);
        });
    }, [idJuegoPantalla, tieneDemo]);

    return { buscando, demo };
}

export default useDemoFromJuego;
