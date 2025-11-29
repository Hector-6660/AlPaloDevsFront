import React, { useState, useEffect } from "react";
import getAllJuegos from "../servicios/getAllJuegos";

// Hook para obtener todos los juegos
function useAllJuegos () {
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(true);

    // Función para obtener los juegos
    function obtenerJuegos() {
        setBuscando(true);

        // Llamada al servicio para obtener los juegos
        getAllJuegos()
            .then(lista =>{
                setLista(lista);
                setBuscando(false);
            });
    }

    useEffect((obtenerJuegos), []);

    return {buscando, lista};
}

export default useAllJuegos;