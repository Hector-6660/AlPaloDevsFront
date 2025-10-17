import React from "react";
import { Link } from "react-router-dom";
import useUltimoJuego from "../../hooks/useUltimoJuego";
import AjaxLoader from "../AjaxLoader/AjaxLoader";

function NovedadesInicio() {
  const { juego, buscando } = useUltimoJuego();

  if (buscando) return <AjaxLoader />;
  if (!juego) return <p>No hay juegos disponibles.</p>;

  return (
    <>
        <div className="divTituloNovedadesInicio">
            <h2>Novedades</h2>
        </div>
        <div className="row">
            <div className="col-6 col-sm-8 NovedadesInicio">
                <div className="divTextoNovedadesInicio">
                    <h2>{juego.nombre}</h2>
                    <p>{juego.descripcion}</p>
                </div>
            </div>
            <div className="col-6 col-sm-4 divImagenNovedadesInicio">
                <Link to={`/juego/${juego.id}`}>
                    <img src={juego.imagen} alt={juego.nombre} className="imagenNovedadesInicio" />
                </Link>
            </div>
        </div>
    </>
  );
}

export default NovedadesInicio;