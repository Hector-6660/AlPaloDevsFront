import React from "react";
import DListaPersonajes from "../../componentes/DListaPersonajes/DListaPersonajes";

function DPersonajes() {
    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Panel de administración de Personajes</h1>
            </div>
            <DListaPersonajes></DListaPersonajes>
        </div>
    );
}

export default DPersonajes;