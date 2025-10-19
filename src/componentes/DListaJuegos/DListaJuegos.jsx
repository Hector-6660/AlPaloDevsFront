import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAllJuegos from "../../hooks/useAllJuegos";
import usePagination from "../../hooks/usePaginacion";
import { borrarJuego } from "../../servicios/juegoService";
import Paginacion from "../Paginacion/Paginacion";
import AjaxLoader from "../AjaxLoader/AjaxLoader";

function DListaJuegos() {
    const listajuegos = useAllJuegos();
    const [hover, setHover] = useState({ id: null, tipo: null });
    const [juegos, setJuegos] = useState([]);

    const { currentItems, currentPage, totalPages, nextPage, prevPage, goToPage } = usePagination(listajuegos.lista, 9);

    const handleEliminar = async (id) => {
        if (!confirm("¿Seguro que deseas eliminar este juego?")) return;

        try {
            await borrarJuego(id);
            alert("Juego eliminado correctamente");
            // Quita el juego eliminado del estado local sin recargar
            setJuegos((prev) => prev.filter((j) => j.id !== id));
        } catch (error) {
            console.error(error);
            alert("Error al eliminar el juego");
        }
    };

    function muestraTodosJuegos(juego) {
        return (
            <div key={juego.id} className="col-12 Item"
                style={{
                    backgroundColor:
                        hover.id === juego.id && hover.tipo === "editar"
                            ? "rgb(84, 161, 250)"
                            : hover.id === juego.id && hover.tipo === "eliminar"
                            ? "rgb(223, 49, 49)"
                            : "rgb(214, 214, 214)",
                    transition: "background-color 0.2s ease",
                    color:
                        hover.id === juego.id && hover.tipo
                            ? "white"
                            : "black",
                }}>
                <div className="col-10">
                    <p>{juego.nombre}</p>
                </div>
                <div className="col-1 accionesDashboard">
                    <Link to={`/dashboard/juegos/${juego.id}`}>
                        <img src="/src/assets/Iconos/editarNegro.svg"
                            onMouseEnter={() => setHover({ id: juego.id, tipo: "editar" })}
                            onMouseLeave={() => setHover({ id: null, tipo: null })}
                        ></img>
                    </Link>
                </div>
                <div className="col-1 accionesDashboard">
                    <button onClick={() => handleEliminar(juego.id)}>
                        <img src="/src/assets/Iconos/eliminarNegro.svg"
                            onMouseEnter={() => setHover({ id: juego.id, tipo: "eliminar" })}
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
                {listajuegos.buscando ? (
                    <AjaxLoader />
                ) : (
                    <>
                        <div className="row listaDashboard">
                            {currentItems.map(muestraTodosJuegos)}
                        </div>
                        <Paginacion
                            currentPage={currentPage}
                            totalPages={totalPages}
                            nextPage={nextPage}
                            prevPage={prevPage}
                            goToPage={goToPage}
                        />
                    </>
                )}
            </div>
            <div className="row col-12 divCrear">
                <Link to="/dashboard/juegos/nuevo" className="botonAñadir">
                    Agregar Juego
                </Link>
            </div>
        </>
    );
}

export default DListaJuegos;