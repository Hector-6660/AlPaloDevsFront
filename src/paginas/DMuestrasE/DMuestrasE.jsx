import React from "react";
import { useParams } from "react-router-dom";
import FormEditarMuestra from "../../componentes/FormEditarMuestra/FormEditarMuestra";

function DMuestrasE() {
    const { id } = useParams();

    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Panel de edición de Juego</h1>
            </div>
            <div className="col-12">
                <FormEditarMuestra idMuestraPantalla={id} />
            </div>
        </div>
    );
}

export default DMuestrasE;