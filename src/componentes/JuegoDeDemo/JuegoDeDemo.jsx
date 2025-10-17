import React from "react";
import { Link } from "react-router-dom";
import LogoFranquicia from "../LogoFranquicia/LogoFranquicia";
import useOneJuego from "../../hooks/useOneJuego";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import "./JuegoDeDemo.css";

function JuegoDeDemo(props) {
    const juegoId = useOneJuego(props.idJuego);

    function mostrarJuego(juego) {
        if (juegoId) {
            return (
                <div className="row">
                    <div className="col-12 juegoDesdeDemo">
                        <div className="col-12 col-md-5 imagenJuegoDemo">
                            <img src={juegoId.juego.imagen} alt={juegoId.juego.nombre} />
                        </div>
                        <div className="col-12 col-md-7 datosJuegoDemo">
                            <div className="nombreJuegoDemo">
                                <h3>{juegoId.juego.nombre}</h3>
                            </div>
                            <p>{juegoId.juego.descripcion}</p>
                            
                            <div className="col-12 verJuegoFranquicia">
                                <div className="col-12 col-sm-6 verJuego">
                                    <Link to={`/juego/${juegoId.juego.id}`} className="botonVerJuego">
                                        Ver {juegoId.juego.nombre}
                                    </Link>
                                </div>
                                <div className="col-12 col-sm-6 verFranquicia">
                                    <Link to={`/franquicia/${juegoId.juego.franquicia_id}`} className="botonVerFranquicia">
                                        <LogoFranquicia idFranquicia={juegoId.juego.franquicia_id}></LogoFranquicia>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }

    return (
        <div className="">
            {juegoId.buscando ? (
                <AjaxLoader />
            ) : (
                <>
                    {mostrarJuego()}
                </>
            )}
        </div>
    );
}

export default JuegoDeDemo;