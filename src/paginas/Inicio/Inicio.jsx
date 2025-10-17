import React from "react";
import { Link } from "react-router-dom";
import NovedadesInicio from "../../componentes/NovedadesInicio/NovedadesInicio";
import "./Inicio.css";

function Inicio() {
  return (
      <>
        <div className="row ">
          <div className="col-12">
            <img src="/src/assets/Inicio/BannerInicio.jpg" className="img-fluid"></img>
          </div>
          <div className="col-12 divInicio">
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
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
              <img src="/src/assets/Inicio/NosotrosInicio.jpg" alt="Nosotros" className="imagenNosotrosInicio" />
            </div>
            <div className="col-6 NosotrosInicio">
              <div className="divTextoNosotrosInicio">
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                <Link to="/nosotros" className="botonNosotrosInicio">
                  Sobre Nosotros
                </Link>
              </div>
            </div>
        </div>
      </>
  );
}

export default Inicio;