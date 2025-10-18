import React from "react";
import DListaMuestras from "../../componentes/DListaMuestras/DListaMuestras";

function DMuestras() {
    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Panel de administración de Demos</h1>
            </div>
            <DListaMuestras></DListaMuestras>
        </div>
    );
}

export default DMuestras;