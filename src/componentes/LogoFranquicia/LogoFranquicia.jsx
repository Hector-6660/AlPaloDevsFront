import React from "react";
import useFranquiciaFromJuego from "../../hooks/useFranquiciaFromJuego";

function LogoFranquicia(props) {
    const franquicia = useFranquiciaFromJuego(props.idFranquicia);

    return (
        <>
            <img src={franquicia.franquicia.logo} alt="Logo Franquicia" />
        </>
    );
}

export default LogoFranquicia;