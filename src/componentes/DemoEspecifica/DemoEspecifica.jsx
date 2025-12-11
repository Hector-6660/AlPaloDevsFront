import React from "react";
import { Link } from "react-router-dom";
import JuegoDeDemo from "../JuegoDeDemo/JuegoDeDemo";
import useOneDemo from "../../hooks/useOneDemo";
import useDynamicScript from "../../hooks/useDynamicScript";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import "./DemoEspecifica.css";

import caraTriste from "/src/assets/Iconos/caraTriste.svg";

function DemoEspecifica(props) {
    const idDemo = useOneDemo(props.idDemoPantalla);

    // Cargar el script dinámicamente cuando la demo esté lista
    useDynamicScript(idDemo.demo?.mainScript, !idDemo.buscando);

    function mostrarDemoEspecifico() {
        return (
            <>
                <div className="col-12 datosPrincipalesDemo">
                    <div className="row d-block d-lg-none">
                        <div className="col-12">
                            <h1>{idDemo.demo.nombre}</h1>
                        </div>
                        <div className="col-12 noMovil">
                            <img src={caraTriste} alt="caraTriste" />
                            <p>Demo no disponible para dispositivos móviles</p>
                        </div>
                    </div>
                    <div className="row d-none d-lg-block">
                        <div className="col-12">
                            <h1>{idDemo.demo.nombre}</h1>
                        </div>
                        <div className="col-12">
                            <canvas id="miCanvas" width="800" height="800"></canvas>
                        </div>
                        <div className="col-12 botonesDemo">
                            <button id="botonIniciar">Empezar a jugar</button>
                            <button id="botonReiniciar">Volver a empezar</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 juegoDemo">
                    <h2>Juego original</h2>
                    <JuegoDeDemo idJuego={idDemo.demo.juego_id}></JuegoDeDemo>
                </div>
            </>
        );
    }

    return (

        <div className="container mt-4" id={idDemo.demo.id}>
            {idDemo.buscando ? (
                <AjaxLoader />
            ) : (
                <div className="row">
                    {mostrarDemoEspecifico()}
                </div>
            )}
        </div>
    );
}

export default DemoEspecifica;