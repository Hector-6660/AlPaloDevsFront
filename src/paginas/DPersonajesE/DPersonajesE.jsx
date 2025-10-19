import React from "react";
import { useParams } from "react-router-dom";
import FormEditarPersonaje from "../../componentes/FormEditarPersonaje/FormEditarPersonaje";

function DPersonajesE() {
    const { id } = useParams();

    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Panel de edición de Personaje</h1>
            </div>
            <div className="col-12">
                <FormEditarPersonaje idPersonajePantalla={id}/>
            </div>
        </div>
    );
}

export default DPersonajesE;