import React from "react";
import './OpinionMin.css';

function OpinionMin(props) {
    const fecha = new Date(props.opinion.created_at).toISOString().split("T")[0];

    return (
        <div className="col-12 opinionMin">
            <div className="row">
                <div className="col-6 datosUsuarioOpinion">
                    <img src={props.opinion.usuario.foto_perfil} alt={props.opinion.usuario.nick} className="imagenUsuarioOpinion"/>
                    <p>{props.opinion.usuario.nick}</p>
                </div>
                <div className="col-6 datosPuntuacionOpinion">
                    <div className="puntuacionOpinion">
                        <p className="puntuacion">{props.opinion.puntuacion}</p><p>/100</p>
                    </div>
                </div>
            </div>
            <div className="row contenidoOpinion">
                <div className="col-12 col-md-6 tituloOpinionFecha">
                    <h3 className="tituloOpinion">{props.opinion.titulo}</h3>
                    <p>{fecha}</p>
                </div>
                <div className="col-12">
                    <p className="textoOpinion">{props.opinion.contenido}</p>
                </div>
            </div>
        </div>
    );
}

export default OpinionMin;
