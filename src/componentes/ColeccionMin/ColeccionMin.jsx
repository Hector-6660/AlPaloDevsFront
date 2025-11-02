import React from "react";
import { Link } from "react-router-dom";
import { borrarColeccion } from "../../servicios/coleccionService";
import "./ColeccionMin.css";

function ColeccionMin(props) {
    const handleDelete = async (e) => {
        e.preventDefault(); // para que no navegue al hacer click dentro del Link
        if (window.confirm("¿Seguro que quieres eliminar esta colección?")) {
            try {
                await borrarColeccion(props.coleccion.id);
                alert("Colección eliminada con éxito");
            } catch (err) {
                console.error(err);
                alert("Error al eliminar la colección");
            }
        }
    };

    return (
        <div className="col-12 coleccionMinContainer">
            <Link to={`/AlPaloDevsFront/coleccion/${props.coleccion.id}`} className="linkColeccionMin">
                <div className="row  coleccionMin">
                    <div className="col-4">
                        <img src={props.coleccion.imagen} alt={props.coleccion.nombre} className="imagenColeccion"/>
                    </div>
                    <div className="col-8 infoColeccion">
                        <div className="nombreColeccion">
                            <h3>{props.coleccion.nombre}</h3>
                        </div>
                        <div className="descripcionColeccion">
                            <p>{props.coleccion.descripcion}</p>
                        </div>
                        <button onClick={handleDelete} className="botonEliminar">Eliminar</button>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ColeccionMin;