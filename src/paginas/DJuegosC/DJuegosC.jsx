import React from "react";
import FormCrearJuego from "../../componentes/FormCrearJuego/FormCrearJuego";

function DJuegosC() {
    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Panel de creación de Juego</h1>
            </div>
            <div className="col-12">
                <FormCrearJuego></FormCrearJuego>
            </div>
        </div>
    );
}

export default DJuegosC;