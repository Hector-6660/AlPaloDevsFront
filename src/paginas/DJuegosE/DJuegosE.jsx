import React from "react";
import { useParams } from "react-router-dom";
import FormEditarJuego from "../../componentes/FormEditarJuego/FormEditarJuego";

function DJuegosE() {
    const { id } = useParams();

    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Panel de edición de Juego</h1>
            </div>
            <div className="col-12">
                <FormEditarJuego idJuegoPantalla={id}/>
            </div>
        </div>
    );
}

export default DJuegosE;