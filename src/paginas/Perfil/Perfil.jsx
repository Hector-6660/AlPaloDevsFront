import React from "react";
import DatosUsuario from "../../componentes/DatosUsuario/DatosUsuario";
import ListaColecciones from "../../componentes/ListaColecciones/ListaColecciones";

function Perfil(props) {
    return (
        <div className="row">
            <DatosUsuario></DatosUsuario>
            <ListaColecciones></ListaColecciones>
        </div>
    );
}

export default Perfil;