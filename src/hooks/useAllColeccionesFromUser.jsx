import React, { useState, useEffect } from "react";
import getAllColeccionesFromUser from "../servicios/getAllColeccionesFromUser";

function useAllColeccionesFromUser (idUserPantalla) {
    const [lista, setLista] = useState([]);
    const [buscando, setBuscando] = useState(true);

    function obtenerColecciones() {
        setBuscando(true);

        getAllColeccionesFromUser(idUserPantalla)
            .then(datosColecciones => {
                setLista(datosColecciones);
                setBuscando(false);
            });
    }

    useEffect((obtenerColecciones), [idUserPantalla]);

    return {buscando, lista};
}

export default useAllColeccionesFromUser;