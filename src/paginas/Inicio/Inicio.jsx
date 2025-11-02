import React from "react";
import { Link } from "react-router-dom";
import NovedadesInicio from "../../componentes/NovedadesInicio/NovedadesInicio";
import "./Inicio.css";

function Inicio() {
  return (
      <>
        <div className="row ">
          <div className="col-12">
            <img src="/AlPaloDevsFront/src/assets/Inicio/BannerInicio.jpg" className="img-fluid"></img>
          </div>
          <div className="col-12 divInicio">
            <p>Todo gran juego comienza con una idea. Nosotros la hacemos jugar.</p>
          </div>
        </div>
        <div className="row">
          <NovedadesInicio></NovedadesInicio>
        </div>
        <div className="divTituloNosotrosInicio">
            <h2>Al Palo Devs</h2>
        </div>
        <div className="row">
            <div className="col-6 divImagenNosotrosInicio">
              <img src="/AlPaloDevsFront/src/assets/Inicio/NosotrosInicio.jpg" alt="Nosotros" className="imagenNosotrosInicio" />
            </div>
            <div className="col-6 NosotrosInicio">
              <div className="divTextoNosotrosInicio">
                <p>En AlpaloDevs, creemos que los videojuegos no solo se juegan, se viven.
                  Detrás de cada línea de código y cada diseño, hay personas apasionadas que disfrutan creando experiencias únicas.
                  ¿Quieres saber quiénes somos y cómo trabajamos?</p>
                <Link to="/AlPaloDevsFront/nosotros" className="botonNosotrosInicio">
                  Sobre Nosotros
                </Link>
              </div>
            </div>
        </div>
      </>
  );
}

export default Inicio;