import React from "react";
import { Link } from "react-router-dom";
import "./PieDePagina.css";

import twitterx from "/src/assets/Redes/twitterx.png";
import googlePlay from "/src/assets/Redes/googlePlay.png";
import logoMenu from "/src/assets/Logo/logoFondoNegro.png";

function PieDePagina() {
    return (
        <footer className="row pie">
            <div className="col-12 redes">
                <a href="https://x.com/alpalodevs"><img src={twitterx} className="twitterx"></img></a>
                <a href="https://play.google.com/store/apps/dev?id=8904098810930432419"><img src={googlePlay} className="googlePlay"></img></a>
            </div>
            <div className="col-12 cuerpoPie">
                <div className="row">
                <div className="col-6 logoPie">
                    <img src={logoMenu} className="logoMenu"></img>
                </div>
                <div className="col-6 botonContactoArea">
                    <Link to="/AlPaloDevsFront/contacto" className="botonContacto">Contáctanos</Link>
                </div>
                </div>
                
                <div className="col-12 finPie">
                    <p>Al Palo Devs</p>
                    <a href="#top">Volver arriva</a>
                </div>
            </div>
        </footer>
    );
}

export default PieDePagina;