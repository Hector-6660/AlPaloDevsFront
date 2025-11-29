import React, { useState, useEffect } from "react";
import getOnePersonaje from "../servicios/getOnePersonaje";

// Hook para obtener un personaje dado su ID
function useOnePersonaje(idPersonajePantalla) {
    const [personaje, setPersonaje] = useState({});
    const [buscando, setBuscando] = useState(true);

    // Función para obtener los personajes
    function obtenerPersonajes() {
        setBuscando(true);

        // Llamada al servicio para obtener el personaje
        getOnePersonaje(idPersonajePantalla)
            .then(datosPersonaje =>{
                setPersonaje(datosPersonaje);
                setBuscando(false);
            });
    }

    // useEffect para ejecutar la obtención del personaje cuando cambie el ID
    useEffect((obtenerPersonajes), [idPersonajePantalla]);

    return {buscando, personaje};
}

export default useOnePersonaje;