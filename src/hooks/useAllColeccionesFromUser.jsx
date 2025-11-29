import React, { useState, useEffect } from "react";
import getAllColeccionesFromUser from "../servicios/getAllColeccionesFromUser";

// Hook para obtener todas las colecciones de un usuario dado su ID
function useAllColeccionesFromUser (idUserPantalla) {
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(true);

    // Función para obtener las colecciones del usuario
    function obtenerColecciones() {
        setBuscando(true);

        // Llamada al servicio para obtener las colecciones
        getAllColeccionesFromUser(idUserPantalla)
            .then(datosColecciones => {
                setLista(datosColecciones);
                setBuscando(false);
            });
    }

    // useEffect para ejecutar la obtención de colecciones cuando cambie el ID del usuario
    useEffect((obtenerColecciones), [idUserPantalla]);

    return {buscando, lista};
}

export default useAllColeccionesFromUser;