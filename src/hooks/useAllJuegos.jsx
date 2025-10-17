import React, { useState, useEffect } from "react";
import getAllJuegos from "../servicios/getAllJuegos";

function useAllJuegos () {
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(true);
    
    function obtenerJuegos() {
        setBuscando(true);

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