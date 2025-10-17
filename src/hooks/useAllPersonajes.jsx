import React, { useState, useEffect } from "react";
import getAllPersonajes from "../servicios/getAllPersonajes";

function useAllPersonajes () {
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(true);

    function obtenerPersonajes() {
        setBuscando(true);

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