import React from "react";
import FormCrearFranquicia from "../../componentes/FormCrearFranquicia/FormCrearFranquicia";

function DFranquiciasC() {
    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Panel de creación de Franquicia</h1>
            </div>
            <div className="col-12">
                <FormCrearFranquicia></FormCrearFranquicia>
            </div>
        </div>
    );
}

export default DFranquiciasC;