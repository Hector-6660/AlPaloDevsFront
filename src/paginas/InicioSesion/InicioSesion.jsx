import React from "react";
import FormInicioSesion from "../../componentes/FormInicioSesion/FormInicioSesion";
import './InicioSesion.css';

function InicioSesion() {
    return (
        <div className="inicio-sesion">
            <h1>Inicio de Sesión</h1>
            <FormInicioSesion></FormInicioSesion>
        </div>
    );
}

export default InicioSesion;