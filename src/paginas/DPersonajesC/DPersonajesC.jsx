import React from "react";
import FormCrearPersonaje from "../../componentes/FormCrearPersonaje/FormCrearPersonaje";

function DPersonajesC() {
    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Panel de creación de Personaje</h1>
            </div>
            <div className="col-12">
                <FormCrearPersonaje></FormCrearPersonaje>
            </div>
        </div>
    );
}

export default DPersonajesC;