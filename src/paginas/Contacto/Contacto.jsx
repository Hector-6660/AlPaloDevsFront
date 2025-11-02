import React from "react";
import "./Contacto.css";

function Contacto() {
    return (
        <>
            <div className="row">
                <div className="col-12 divTituloContacto">
                    <h1>Contacto</h1>
                    <p>¿Tienes dudas, sugerencias o quieres colaborar? ¡Estamos encantados de escucharte!</p>
                </div>
            </div>
            <div className="row">
                <div className="contactoItem">
                    <div className="col-2">
                        <img src="/AlPaloDevsFront/src/assets/Redes/correo.png" alt="Email" />
                    </div>
                    <div className="col-10 descripcionContacto">
                        <h3>Correo electrónico</h3>
                        <p><a href="mailto:alpalodevs@gmail.com">alpalodevs@gmail.com</a></p>
                        <p>Te responderemos en un plazo de 24-48 horas.</p>
                    </div>
                </div>

                <div className="contactoItem">
                    <div className="col-2">
                        <img src="/AlPaloDevsFront/src/assets/Redes/twitterx.png" alt="Twitter" />
                    </div>
                    <div className="col-10 descripcionContacto">
                        <h3>Twitter</h3>
                        <p><a href="https://twitter.com/alpalodevs" target="_blank" rel="noopener noreferrer">@AlpaloDevs</a></p>
                        <p>Envíanos un mensaje o menciona nuestra cuenta.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacto;