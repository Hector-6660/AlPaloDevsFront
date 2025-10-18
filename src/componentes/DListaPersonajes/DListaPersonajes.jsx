import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAllPersonajes from "../../hooks/useAllPersonajes";
import { borrarPersonaje } from "../../servicios/personajeService";
import AjaxLoader from "../AjaxLoader/AjaxLoader";

function DListaPersonajes() {
    const listapersonajes = useAllPersonajes();
    const [hover, setHover] = useState({ id: null, tipo: null });
    const [personajes, setPersonajes] = useState([]);

    const handleEliminar = async (id) => {
        if (!confirm("¿Seguro que deseas eliminar este personaje?")) return;

        try {
            await borrarPersonaje(id);
            alert("Personaje eliminado correctamente");
            // Quita el personaje eliminado del estado local sin recargar
            setPersonajes((prev) => prev.filter((p) => p.id !== id));
        } catch (error) {
            console.error(error);
            alert("Error al eliminar el personaje");
        }
    };

    function muestraTodosPersonajes(personaje) {
        return (
            <div key={personaje.id} className="col-12 Item"
                style={{
                    backgroundColor:
                        hover.id === personaje.id && hover.tipo === "editar"
                            ? "rgb(84, 161, 250)"
                            : hover.id === personaje.id && hover.tipo === "eliminar"
                            ? "rgb(223, 49, 49)"
                            : "rgb(214, 214, 214)",
                    transition: "background-color 0.2s ease",
                    color:
                        hover.id === personaje.id && hover.tipo
                            ? "white"
                            : "black",
                }}>
                <div className="col-10">
                    <p>{personaje.nombre}</p>
                </div>
                <div className="col-1 accionesDashboard">
                    <Link to={`/dashboard/personajes/${personaje.id}`}>
                        <img src="/src/assets/Iconos/editarNegro.svg"
                            onMouseEnter={() => setHover({ id: personaje.id, tipo: "editar" })}
                            onMouseLeave={() => setHover({ id: null, tipo: null })}
                        ></img>
                    </Link>
                </div>
                <div className="col-1 accionesDashboard">
                    <button onClick={() => handleEliminar(personaje.id)}>
                        <img src="/src/assets/Iconos/eliminarNegro.svg"
                            onMouseEnter={() => setHover({ id: personaje.id, tipo: "eliminar" })}
                            onMouseLeave={() => setHover({ id: null, tipo: null })}
                        ></img>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="container col-12">
                {listapersonajes.buscando ? (
                    <AjaxLoader />
                ) : (
                    <div className="row listaDashboard">
                        {listapersonajes.lista.map(muestraTodosPersonajes)}
                    </div>
                )}
            </div>
            <div className="row col-12 divCrear">
                <Link to="/dashboard/personajes/nuevo" className="botonAñadir">
                    Agregar Personaje
                </Link>
            </div>
        </>
    );
}

export default DListaPersonajes;