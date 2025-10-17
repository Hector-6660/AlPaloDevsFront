import React from "react";
import { useParams } from "react-router-dom";
import ColeccionEspecifica from "../../componentes/ColeccionEspecifica/ColeccionEspecifica";

function Coleccion(props) {
  const { id } = useParams();

  return (
    <div className="row">
      <ColeccionEspecifica idColeccion={id} />
    </div>
  );
}

export default Coleccion;