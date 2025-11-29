import React, { useState, useEffect } from "react";
import getAllDemos from "../servicios/getAllDemos";

// Hook para obtener todas las demos
function useAllDemos () {
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(true);

    // Función para obtener las demos
    function obtenerDemos() {
        setBuscando(true);

        // Llamada al servicio para obtener las demos
        getAllDemos()
            .then(lista =>{
                setLista(lista);
                setBuscando(false);
            });
    }

    useEffect((obtenerDemos), []);

    return {buscando, lista};
}

export default useAllDemos;