import React, { useState, useEffect } from "react";
import getAllFranquicias from "../servicios/getAllFranquicias";

// Hook para obtener todas las franquicias
function useAllFranquicias () {
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(true);

    // Función para obtener las franquicias
    function obtenerFranquicias() {
        setBuscando(true);

        // Llamada al servicio para obtener las franquicias
        getAllFranquicias()
            .then(lista =>{
                setLista(lista);
                setBuscando(false);
            });
    }

    useEffect((obtenerFranquicias), []);

    return {buscando, lista};
}

export default useAllFranquicias;