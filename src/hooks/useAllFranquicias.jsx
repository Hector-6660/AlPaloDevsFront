import React, { useState, useEffect } from "react";
import getAllFranquicias from "../servicios/getAllFranquicias";

function useAllFranquicias () {
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(true);
    
    function obtenerFranquicias() {
        setBuscando(true);

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