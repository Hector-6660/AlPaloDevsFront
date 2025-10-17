import React, { useState, useEffect } from "react";
import getAllDemos from "../servicios/getAllDemos";

function useAllDemos () {
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(true);

    function obtenerDemos() {
        setBuscando(true);

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