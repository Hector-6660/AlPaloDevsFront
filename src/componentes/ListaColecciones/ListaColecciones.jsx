import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useAllColeccionesFromUser from "../../hooks/useAllColeccionesFromUser";
import ColeccionMin from "../ColeccionMin/ColeccionMin";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import "./ListaColecciones.css";

const ListaColecciones = () => {
    const { user } = useAuth();
    const listaColecciones = useAllColeccionesFromUser(user.id);

    function mostrarColeccion(coleccion) {
        return (
            <ColeccionMin key ={coleccion.id} coleccion={coleccion}></ColeccionMin>
        );
    }

    return (
        <div className="listaColecciones">
            <div className="col-12 coleccionesHeader">
                <h2>Mis Colecciones</h2>
                <Link to="/AlPaloDevsFront/crear-coleccion">Crear Nueva Colección</Link>
            </div>
            <div className="col-12 coleccionesBody">
                {listaColecciones.buscando ? (
                    <AjaxLoader />
                ) : listaColecciones.lista.length === 0 ? (
                    <p>No tienes colecciones.</p>
                ) : (
                    listaColecciones.lista.map(mostrarColeccion)
                )}
            </div>
        </div>
    );
};

export default ListaColecciones;
