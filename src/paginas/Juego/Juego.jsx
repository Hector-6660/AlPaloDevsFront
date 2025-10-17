import React from "react";
import { useParams } from "react-router-dom";
import JuegoEspecifico from "../../componentes/JuegoEspecifico/JuegoEspecifico";

function Juego() {
    const { id } = useParams();

    return (
        <div className="row ">
            <JuegoEspecifico idJuegoPantalla={id}></JuegoEspecifico>
        </div>
    );
}

export default Juego;