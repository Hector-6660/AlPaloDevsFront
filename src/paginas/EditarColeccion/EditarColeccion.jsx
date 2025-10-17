import React from "react";
import { useParams } from "react-router-dom";
import FormEditarColeccion from "../../componentes/FormEditarColeccion/FormEditarColeccion";

function EditarColeccion() {
    const { id } = useParams();

    return (
        <div className="row">
            <FormEditarColeccion idColeccion={id} />
        </div>
    );
}

export default EditarColeccion;