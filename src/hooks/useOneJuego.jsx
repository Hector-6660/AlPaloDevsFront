import React, { useState, useEffect } from "react";
import getOneJuego from "../servicios/getOneJuego";

function useOneJuego(idJuegoPantalla) {
    const [juego, setJuego] = useState({});
    const [buscando, setBuscando] = useState(true);
    
    function obtenerJuegos() {
        setBuscando(true);

        getOneJuego(idJuegoPantalla)
            .then(datosJuego =>{
                setJuego(datosJuego);
                setBuscando(false);
            });
    }

    useEffect((obtenerJuegos), [idJuegoPantalla]);

    return {buscando, juego};
}

export default useOneJuego;