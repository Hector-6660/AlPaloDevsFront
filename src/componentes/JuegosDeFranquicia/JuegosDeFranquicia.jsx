import React from "react";
import { Link } from "react-router-dom";
import useJuegoFromFranquicia from "../../hooks/useJuegoFromFranquicia";
import useFranquiciaFromJuego from "../../hooks/useFranquiciaFromJuego";
import AjaxLoader from "../AjaxLoader/AjaxLoader";

function JuegosDeFranquicia(props) {
    const juegosDeFranquicia = useJuegoFromFranquicia(props.idFranquicia);
    const franquicia = useFranquiciaFromJuego(props.idFranquicia);

    function mostrarNombreDeFranquicia() {
        return (
            <h2>Franquicia: <Link to={`/franquicia/${props.idFranquicia}`}>{franquicia.franquicia.nombre}</Link></h2>
        );
    }

    return (
        <div className="col-12 col-md-6">
            {mostrarNombreDeFranquicia()}
            {juegosDeFranquicia.buscando ? (
                <AjaxLoader></AjaxLoader>
            ) : (
                <ul>
                    {juegosDeFranquicia.franquicia.map((juego) => (
                        <li key={juego.id}>{juego.nombre}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default JuegosDeFranquicia;