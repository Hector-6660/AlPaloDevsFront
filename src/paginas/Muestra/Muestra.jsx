import React from "react";
import { useParams } from "react-router-dom";
import DemoEspecifica from "../../componentes/DemoEspecifica/DemoEspecifica";

function Muestra() {
    const { id } = useParams();

    return (
        <div className="row">
            <DemoEspecifica idDemoPantalla={id}></DemoEspecifica>
        </div>
    );
}

export default Muestra;