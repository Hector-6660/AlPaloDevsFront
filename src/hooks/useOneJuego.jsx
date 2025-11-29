import React, { useState, useEffect } from "react";
import getOneJuego from "../servicios/getOneJuego";

// Hook para obtener un juego dado su ID
function useOneJuego(idJuegoPantalla) {
    const [juego, setJuego] = useState({});
    const [buscando, setBuscando] = useState(true);
    
    // Función para obtener el juego
    function obtenerJuegos() {
        setBuscando(true);

        // Llamada al servicio para obtener el juego
        getOneJuego(idJuegoPantalla)
            .then(datosJuego =>{
                setJuego(datosJuego);
                setBuscando(false);
            });
    }

    // useEffect para ejecutar la obtención del juego cuando cambie el ID
    useEffect((obtenerJuegos), [idJuegoPantalla]);

    return {buscando, juego};
}

export default useOneJuego;