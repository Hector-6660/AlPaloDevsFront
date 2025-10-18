import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAllMuestras from "../../hooks/useAllMuestras";
import { borrarMuestra } from "../../servicios/muestraService";
import AjaxLoader from "../AjaxLoader/AjaxLoader";

function DListaMuestras() {
    const listamuestras = useAllMuestras();
    const [hover, setHover] = useState({ id: null, tipo: null });
    const [muestras, setMuestras] = useState([]);

    const handleEliminar = async (id) => {
        if (!confirm("¿Seguro que deseas eliminar esta demo?")) return;

        try {
            await borrarMuestra(id);
            alert("Demo eliminada correctamente");
            // Quita la demo eliminada del estado local sin recargar
            setMuestras((prev) => prev.filter((m) => m.id !== id));
        } catch (error) {
            console.error(error);
            alert("Error al eliminar la demo");
        }
    };

    function muestraTodasMuestras(muestra) {
        return (
            <div key={muestra.id} className="col-12 Item"
                style={{
                    backgroundColor:
                        hover.id === muestra.id && hover.tipo === "editar"
                            ? "rgb(84, 161, 250)"
                            : hover.id === muestra.id && hover.tipo === "eliminar"
                            ? "rgb(223, 49, 49)"
                            : "rgb(214, 214, 214)",
                    transition: "background-color 0.2s ease",
                    color:
                        hover.id === muestra.id && hover.tipo
                            ? "white"
                            : "black",
                }}>
                <div className="col-10">
                    <p>{muestra.nombre}</p>
                </div>
                <div className="col-1 accionesDashboard">
                    <Link to={`/dashboard/muestras/${muestra.id}`}>
                        <img src="/src/assets/Iconos/editarNegro.svg"
                            onMouseEnter={() => setHover({ id: muestra.id, tipo: "editar" })}
                            onMouseLeave={() => setHover({ id: null, tipo: null })}
                        ></img>
                    </Link>
                </div>
                <div className="col-1 accionesDashboard">
                    <button onClick={() => handleEliminar(muestra.id)}>
                        <img src="/src/assets/Iconos/eliminarNegro.svg"
                            onMouseEnter={() => setHover({ id: muestra.id, tipo: "eliminar" })}
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
                {listamuestras.buscando ? (
                    <AjaxLoader />
                ) : (
                    <div className="row listaDashboard">
                        {listamuestras.lista.map(muestraTodasMuestras)}
                    </div>
                )}
            </div>
            <div className="row col-12 divCrear">
                <Link to="/dashboard/muestras/nuevo" className="botonAñadir">
                    Agregar Muestra
                </Link>
            </div>
        </>
    );
}

export default DListaJuegos;