import React, { useState, useEffect } from "react";
import getAllOpinionesFromJuego from "../servicios/getAllOpinionesFromJuego";

function useAllOpinionesFromJuegos (idJuegoPantalla) {
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(true);

    function obtenerOpiniones() {
        setBuscando(true);

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