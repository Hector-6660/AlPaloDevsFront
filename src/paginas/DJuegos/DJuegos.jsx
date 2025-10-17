import React from "react";
import DListaJuegos from "../../componentes/DListaJuegos/DListaJuegos";
import './DJuegos.css';

function DJuegos() {
    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Panel de administración de Juegos</h1>
            </div>
            <DListaJuegos></DListaJuegos>
        </div>
    );
}

export default DJuegos;