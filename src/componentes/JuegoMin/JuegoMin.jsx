import React from "react";
import { Link } from "react-router-dom";
import './JuegoMin.css';

function JuegoMin(props) {
    return (
        <div className="col-6 col-md-4 juegoMinMargen">
            <div className="juegoMin">
                <Link to={`/juego/${props.juego.id}`} value={props.juego.id}>
                    <img src={props.juego.imagen} className="imagenJuegoMin"></img>
                    <h3>{props.juego.nombre}</h3>
                </Link>
            </div>
        </div>
    );
}

export default JuegoMin;