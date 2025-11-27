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
                    <p>
                    <a href="https://example.com">Al Palo Devs</a> © 2025 by{" "}
                    <a href="https://example.com">Héctor Añor de Maya</a> is licensed under{" "}
                    <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>

                    <img
                        src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
                        alt=""
                        style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
                    />

                    <img
                        src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
                        alt=""
                        style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
                    />

                    <img
                        src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
                        alt=""
                        style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
                    />
                    </p>

                    <a href="#top">Volver arriba</a>
                </div>
            </div>
        </footer>
    );
}

export default PieDePagina;