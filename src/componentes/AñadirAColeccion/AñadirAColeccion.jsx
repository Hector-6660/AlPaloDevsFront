import React, { useState } from "react";
import useAllColeccionesFromUser from "../../hooks/useAllColeccionesFromUser";
import { useAuth } from "../../context/AuthContext";
import { agregarJuegoAColeccion } from "../../servicios/coleccionService";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import "./AñadirAColeccion.css";

function AñadirAColeccion(props) {
    const { user } = useAuth();
    const colecciones = useAllColeccionesFromUser(user?.id);
    const [coleccionSeleccionada, setColeccionSeleccionada] = useState("");

    const handleChange = (e) => {
        setColeccionSeleccionada(e.target.value);
    };

    const handleAdd = async () => {
        if (!coleccionSeleccionada) {
            alert("Selecciona una colección");
            return;
        }

        try {
            await agregarJuegoAColeccion(coleccionSeleccionada, props.juegoId);
            alert("Juego añadido correctamente a la colección");
        } catch (err) {
            console.error(err);
            alert("Error al añadir el juego a la colección");
        }
    };

    function mostrarColecciones(coleccion) {

        return (
            <option key={coleccion.id} value={coleccion.id}>{coleccion.nombre}</option>
        )
    }

    return (
        <>
            {colecciones.buscando ?
                <AjaxLoader></AjaxLoader>
                :
                colecciones.lista.length === 0 ?
                    <select className="selectColeccion" disabled>
                        <option>No tienes colecciones</option>
                    </select>
                    :
                    <>
                        
                        <select className="selectColeccion" value={coleccionSeleccionada} onChange={handleChange}>
                            <option value="">Selecciona una colección</option>
                            {colecciones.lista.map(mostrarColecciones)}
                        </select>
                        <button className="anadirAColeccion" onClick={handleAdd}>Anadir a Colección</button>
                    </>
            }
        </>
    );
}

export default AñadirAColeccion;
