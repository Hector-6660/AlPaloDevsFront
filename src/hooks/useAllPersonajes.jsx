import React, { useState, useEffect } from "react";
import getAllPersonajes from "../servicios/getAllPersonajes";

// Hook para obtener todos los personajes
function useAllPersonajes () {
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(true);

    // Función para obtener los personajes
    function obtenerPersonajes() {
        setBuscando(true);

        // Llamada al servicio para obtener los personajes
        getAllPersonajes()
            .then(lista =>{
                setLista(lista);
                setBuscando(false);
            });
    }

    useEffect((obtenerPersonajes), []);

    return {buscando, lista};
}

export default useAllPersonajes;