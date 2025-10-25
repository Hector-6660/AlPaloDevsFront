import React from "react";
import FormCrearMuestra from "../../componentes/FormCrearMuestra/FormCrearMuestra";

function DMuestrasC() {
    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Panel de creación de Muestra</h1>
            </div>
            <div className="col-12">
                <FormCrearMuestra />
            </div>
        </div>
    );
}

export default DMuestrasC;