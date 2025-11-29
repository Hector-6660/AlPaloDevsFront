import React, { useState, useEffect } from "react";
import getAllOpinionesFromJuego from "../servicios/getAllOpinionesFromJuego";

// Hook para obtener todas las opiniones de un juego dado su ID
function useAllOpinionesFromJuegos (idJuegoPantalla) {
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(true);

    // Función para obtener las opiniones del juego
    function obtenerOpiniones() {
        setBuscando(true);

        // Llamada al servicio para obtener las opiniones del juego
        getAllOpinionesFromJuego(idJuegoPantalla)
            .then(datosOpiniones => {
                setLista(datosOpiniones);
                setBuscando(false);
            });
    }

    useEffect((obtenerOpiniones), [idJuegoPantalla]);

    return {buscando, lista};
}

export default useAllOpinionesFromJuegos;