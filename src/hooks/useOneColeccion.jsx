import React, { useState, useEffect } from "react";
import getOneColeccion from "../servicios/getOneColeccion";

// Hook para obtener una colección dado su ID
function useOneColeccion(idColeccion) {
    const [coleccion, setColeccion] = useState({});
    const [buscando, setBuscando] = useState(true);

    // Función para obtener la colección
    function obtenerColecciones() {
        setBuscando(true);

        // Llamada al servicio para obtener la colección
        getOneColeccion(idColeccion)
            .then(datosColeccion =>{
                setColeccion(datosColeccion);
                setBuscando(false);
            });
    }

    // useEffect para ejecutar la obtención de la colección cuando cambie el ID
    useEffect((obtenerColecciones), [idColeccion]);

    return {buscando, coleccion};
}

export default useOneColeccion;