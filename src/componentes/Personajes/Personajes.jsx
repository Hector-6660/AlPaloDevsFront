import React, { useState, useEffect, useRef } from "react";
import usePersonajeFromFranquicia from "../../hooks/usePersonajeFromFranquicia";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import "./Personajes.css";

function Personajes(props) {
    const personajesSacados = usePersonajeFromFranquicia(props.franquiciaId);
    const [pagina, setPagina] = useState(0);
    const personajesPorPagina = 6;

    const personajes = personajesSacados.personajes || [];
    const totalPaginas = Math.ceil(personajes.length / personajesPorPagina);

    const personajesMostrados = personajes.slice(
        pagina * personajesPorPagina,
        (pagina + 1) * personajesPorPagina
    );

    function avanzar() {
        if (pagina < totalPaginas - 1) setPagina(pagina + 1);
    }

    function retroceder() {
        if (pagina > 0) setPagina(pagina - 1);
    }

    function mostrarPersonajes(personaje) {
        return (
            <div key={personaje.id} className="personajeMarco">
                <div>
                    <img src={personaje.imagen} alt={personaje.nombre} />
                </div>
                <div className="personajeInfo">
                    <h3>{personaje.nombre}</h3>
                    <p>{personaje.descripcion}</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="galeriaPersonajes">
                {personajesSacados.buscando ? (
                    <AjaxLoader />
                ) : (
                    <>
                        <button className="flecha izquierda" onClick={retroceder} disabled={pagina === 0}>
                            {"<"}
                        </button>
                        <div className="galeriaPersonajesImagenes">
                            {personajesMostrados.map(mostrarPersonajes)}
                        </div>
                        <button className="flecha derecha" onClick={avanzar} disabled={pagina === totalPaginas - 1}>
                            {">"}
                        </button>
                    </>
                )}
            </div>
        </>
    );
}

export default Personajes;
