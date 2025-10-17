import React, { use } from "react";
import useAllOpinionesFromJuegos from "../../hooks/useAllOpinionesFromJuegos";
import OpinionMin from "../OpinionMin/OpinionMin";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import './ListaOpiniones.css';

function ListaOpiniones(props) {
    const listaOpiniones = useAllOpinionesFromJuegos(props.idJuego);

    if (!listaOpiniones || !Array.isArray(listaOpiniones.lista)) {
        return (
            <>
                <h2>Opiniones de los Usuarios</h2>
                <p>No hay opiniones todavía.</p>
            </>
        );
    }

    function muestraTodasOpiniones(opinion) {
        return (
            <OpinionMin key={opinion.id} opinion={opinion} />
        );
    }

    return (
        <div className="col-12">
            <h2>Opiniones de los Usuarios</h2>
            {listaOpiniones.buscando ? (
                <AjaxLoader />
            ) : (
                <div className="row">
                    {listaOpiniones.lista.map(muestraTodasOpiniones)}
                </div>
            )}
        </div>
    );
}

export default ListaOpiniones;