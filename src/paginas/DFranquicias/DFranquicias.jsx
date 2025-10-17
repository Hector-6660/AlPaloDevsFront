import React from "react";
import DListaFranquicias from "../../componentes/DListaFranquicias/DListaFranquicias";

function DFranquicias() {
    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Panel de administración de Franquicias</h1>
            </div>
            <DListaFranquicias></DListaFranquicias>
        </div>
    );
}

export default DFranquicias;