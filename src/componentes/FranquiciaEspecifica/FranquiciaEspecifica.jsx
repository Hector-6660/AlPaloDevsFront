import React from "react";
import useFranquiciaFromJuego from "../../hooks/useFranquiciaFromJuego";
import JuegosDeFranquiciaConImagen from "../JuegosDeFranquiciaConImagen/JuegosDeFranquiciaConImagen";
import Personajes from "../Personajes/Personajes";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import './FranquiciaEspecifica.css';

function FranquiciaEspecifica(props) {
    const franquicia = useFranquiciaFromJuego(props.idFranquicia);

    function mostrarContenidoFranquicia() {
        return (
            <>
                <div className="col-12 franquiciaCabecera">
                    <img src={franquicia.franquicia.imagen} alt={franquicia.franquicia.nombre} className="franquiciaImagen"></img>
                    <h1>{franquicia.franquicia.nombre}</h1>
                    <img src={franquicia.franquicia.logo} alt={franquicia.franquicia.nombre} className="franquiciaLogo"></img>
                </div>
                <div className="col-12 franquiciaDatos">
                    <h2>Descripción</h2>
                    <p>{franquicia.franquicia.descripcion}</p>
                </div>
                <div className="col-12 franquiciaDatos">
                    <h2>Juegos</h2>
                    <JuegosDeFranquiciaConImagen franquiciaId={franquicia.franquicia.id}></JuegosDeFranquiciaConImagen>
                </div>
                <div className="col-12 franquiciaDatos">
                    <h2>Personajes</h2>
                    <Personajes franquiciaId={franquicia.franquicia.id}></Personajes>
                </div>
            </>
        );
    }

    return (
        <>
            {franquicia.buscando ? (
                <AjaxLoader />
            ) : (
                <>
                    {mostrarContenidoFranquicia()}
                </>
            )}
        </>
    );
}

export default FranquiciaEspecifica;