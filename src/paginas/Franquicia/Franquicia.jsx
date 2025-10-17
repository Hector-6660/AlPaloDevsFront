import React from "react";
import { useParams } from "react-router-dom";
import FranquiciaEspecifica from "../../componentes/FranquiciaEspecifica/FranquiciaEspecifica";

function Franquicia() {
    const { id } = useParams();

    return (
        <div className="row">
            <FranquiciaEspecifica idFranquicia={id}></FranquiciaEspecifica>
        </div>
    );
}

export default Franquicia;