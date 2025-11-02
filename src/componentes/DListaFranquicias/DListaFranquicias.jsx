import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAllFranquicias from "../../hooks/useAllFranquicias";
import usePagination from "../../hooks/usePaginacion";
import { borrarFranquicia } from "../../servicios/franquiciaService";
import Paginacion from "../Paginacion/Paginacion";
import AjaxLoader from "../AjaxLoader/AjaxLoader";

import editarNegro from "/src/assets/Iconos/editarNegro.svg";
import eliminarNegro from "/src/assets/Iconos/eliminarNegro.svg";

function DListaFranquicias() {
    const listafranquicias = useAllFranquicias();
    const [hover, setHover] = useState({ id: null, tipo: null });
    const [franquicias, setFranquicias] = useState([]);

    const { currentItems, currentPage, totalPages, nextPage, prevPage, goToPage } = usePagination(listafranquicias.lista, 9);

    const handleEliminar = async (id) => {
        if (!confirm("¿Seguro que deseas eliminar esta franquicia?")) return;

        try {
            await borrarFranquicia(id);
            alert("Franquicia eliminada correctamente");
            // Quita la franquicia eliminada del estado local sin recargar
            setFranquicias((prev) => prev.filter((f) => f.id !== id));
        } catch (error) {
            console.error(error);
            alert("Error al eliminar la franquicia");
        }
    };

    function muestraTodosFranquicias(franquicia) {
        return (
            <div key={franquicia.id} className="col-12 Item"
                style={{
                    backgroundColor:
                        hover.id === franquicia.id && hover.tipo === "editar"
                            ? "rgb(84, 161, 250)"
                            : hover.id === franquicia.id && hover.tipo === "eliminar"
                            ? "rgb(223, 49, 49)"
                            : "rgb(214, 214, 214)",
                    transition: "background-color 0.2s ease",
                    color:
                        hover.id === franquicia.id && hover.tipo
                            ? "white"
                            : "black",
                }}>
                <div className="col-10">
                    <p>{franquicia.nombre}</p>
                </div>
                <div className="col-1 accionesDashboard">
                    <Link to={`/AlPaloDevsFront/dashboard/franquicias/${franquicia.id}`}>
                        <img src={editarNegro}
                            onMouseEnter={() => setHover({ id: franquicia.id, tipo: "editar" })}
                            onMouseLeave={() => setHover({ id: null, tipo: null })}
                        ></img>
                    </Link>
                </div>
                <div className="col-1 accionesDashboard">
                    <button onClick={() => handleEliminar(franquicia.id)}>
                        <img src={eliminarNegro}
                            onMouseEnter={() => setHover({ id: franquicia.id, tipo: "eliminar" })}
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
                {listafranquicias.buscando ? (
                    <AjaxLoader />
                ) : (
                    <>
                        <div className="row listaDashboard">
                            {currentItems.map(muestraTodosFranquicias)}
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
                <Link to="/AlPaloDevsFront/dashboard/franquicias/nuevo" className="botonAñadir">
                    Agregar Franquicia
                </Link>
            </div>
        </>
    );
}

export default DListaFranquicias;