import React from "react";
import useJuegoFromFranquicia from "../../hooks/useJuegoFromFranquicia";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import './JuegosDeFranquiciaConImagen.css';
import { Link } from "react-router-dom";

function JuegosDeFranquiciaConImagen(props) {
    const juego = useJuegoFromFranquicia(props.franquiciaId);

    function ordenarPorFechaLanzamientoDesc(juegos) {
        return juegos.slice().sort((a, b) => new Date(a.fecha_lanzamiento) - new Date(b.fecha_lanzamiento));
    }
    
    function mostrarJuegos(juego) {

        return (
            <div key={juego.id} className="col-6 col-md-4 col-sm-2 juegoFranquicia">
                <Link to={`/juego/${juego.id}`}>
                    <img src={juego.imagen} alt={juego.nombre} />
                    <h4>{juego.nombre}</h4>
                </Link>
            </div>
        );
    }

    return (
        <div className="franquiciaJuegos">
            {juego.buscando ? (
                <AjaxLoader />
            ) : (
                <>
                    {ordenarPorFechaLanzamientoDesc(juego.franquicia).map(mostrarJuegos)}
                </>
            )}
        </div>
    );
}

export default JuegosDeFranquiciaConImagen;
