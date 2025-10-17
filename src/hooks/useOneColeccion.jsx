import React, { useState, useEffect } from "react";
import getOneColeccion from "../servicios/getOneColeccion";

function useOneColeccion(idColeccion) {
    const [coleccion, setColeccion] = useState({});
    const [buscando, setBuscando] = useState(true);

    function obtenerColecciones() {
        setBuscando(true);

        getOneColeccion(idColeccion)
            .then(datosColeccion =>{
                setColeccion(datosColeccion);
                setBuscando(false);
            });
    }

    useEffect((obtenerColecciones), [idColeccion]);

    return {buscando, coleccion};
}

export default useOneColeccion;