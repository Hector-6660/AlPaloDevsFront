import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOneJuego from "../../hooks/useOneJuego";
import useDemoFromJuego from "../../hooks/useDemoFromJuego";
import JuegosDeFranquicia from "../JuegosDeFranquicia/JuegosDeFranquicia";
import FormOpinion from "../FormOpinion/FormOpinion";
import ListaOpiniones from "../ListaOpiniones/ListaOpiniones";
import AñadirAColeccion from "../AñadirAColeccion/AñadirAColeccion";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import "./JuegoEspecifico.css";

function JuegoEspecifico(props) {
    const idJuego = useOneJuego(props.idJuegoPantalla);

    const tieneDemoFlag = Boolean(idJuego.juego?.tiene_demo);
    const demoData = useDemoFromJuego(idJuego.juego?.id, tieneDemoFlag);
    const demoId = demoData?.demo?.id ?? null;

    function mostrarJuegoEspecifico() {
        return (
            <>
                <div className="col-12 datosPrincipalesJuego">
                    <div className="row">
                        <div className="col-12 col-md-6 imagenJuegoEspecifico">
                            <img src={idJuego.juego.imagen} alt={idJuego.juego.nombre}></img>
                        </div>
                        <div className="col-12 col-md-6 infoJuegoEspecifico">
                            <div className="tituloJuegoEspecifico">
                                <h1>{idJuego.juego.nombre}</h1>
                            </div>
                            <div className="descripcionJuegoEspecifico">
                                <p>{idJuego.juego.descripcion}</p>
                            </div>
                            <div className="botonJuegoEspecificoDemo">
                                {tieneDemoFlag === true ? (
                                    <Link to={`/AlPaloDevsFront/muestra/${demoId}`} className="botonADemo">
                                    Jugar Demo
                                    </Link>
                                ) : (
                                    <button className="botonADemo" disabled>
                                        Demo no disponible
                                    </button>
                                )}
                                <div className="añadirJuegoEspecificoColeccion">
                                    <AñadirAColeccion juegoId={idJuego.juego.id}></AñadirAColeccion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 datosSecundariosJuego">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2>Detalles Adicionales</h2>
                            <ul>
                                <li>Género: {idJuego.juego.genero}</li>
                                <li>Fecha de Lanzamiento: {idJuego.juego.fecha_lanzamiento}</li>
                                <li>Desarrolladora: {idJuego.juego.autor}</li>
                                <li>Plataforma: {idJuego.juego.plataforma}</li>
                            </ul>
                        </div>
                        <JuegosDeFranquicia idFranquicia={idJuego.juego.franquicia_id}></JuegosDeFranquicia>
                    </div>
                </div>
                <div className="col-12">
                    <h2 className="opinionesJuegoEspecifico">Opiniones</h2>
                    <FormOpinion juegoId={idJuego.juego.id}></FormOpinion>
                    <ListaOpiniones idJuego={idJuego.juego.id}></ListaOpiniones>
                </div>
            </>
        );
    }

    return (

        <div className="container mt-4" id={idJuego.juego.id}>
            {idJuego.buscando ? (
                <AjaxLoader />
            ) : (
                <div className="row">
                    {mostrarJuegoEspecifico()}
                </div>
            )}
        </div>
    );
}

export default JuegoEspecifico;