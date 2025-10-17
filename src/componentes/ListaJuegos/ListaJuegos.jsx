import React from "react";
import useAllJuegos from "../../hooks/useAllJuegos";
import JuegoMin from "../JuegoMin/JuegoMin";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import './ListaJuegos.css';

function ListaJuegos() {
    const listajuegos = useAllJuegos();

    function muestraTodosJuegos(juego) {
        return (
            <JuegoMin key={juego.id} juego={juego}></JuegoMin>
        );
    }

    return (
        <div className="container mt-4">
            {listajuegos.buscando ? (
                <AjaxLoader />
            ) : (
                <div className="row">
                    {listajuegos.lista.map(muestraTodosJuegos)}
                </div>
            )}
        </div>
    );
}

export default ListaJuegos;