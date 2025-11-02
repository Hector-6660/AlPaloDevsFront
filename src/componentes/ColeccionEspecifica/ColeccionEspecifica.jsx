import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { quitarJuegoDeColeccion } from "../../servicios/coleccionService";
import useOneColeccion from "../../hooks/useOneColeccion";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import './ColeccionEspecifica.css';

function ColeccionEspecifica(props) {
    const coleccionId = useOneColeccion(props.idColeccion);
    const [coleccion, setColeccion] = useState(null);

    useEffect(() => {
        if (!coleccionId.buscando) {
            setColeccion(coleccionId.coleccion);
        }
    }, [coleccionId]);

    function mostrarJuegos(juego) {

        async function handleEliminar(juegoId) {
            if (window.confirm("¿Seguro que quieres quitar este juego de la colección?")) {
                try {
                    const resp = await quitarJuegoDeColeccion(coleccion.id, juegoId);
                    setColeccion(resp.coleccion); // actualiza la colección con la nueva lista de juegos
                } catch (err) {
                    console.error(err);
                    alert("Error al quitar el juego");
                }
            }
        }

        return (
            <div key={juego.id} className="col-5 col-sm-3 juegoColeccionEspecificaDiv">
                <Link to={`/AlPaloDevsFront/juego/${juego.id}`} className="juegoColeccionEspecifica">
                    <div className="col-12">
                        <img src={juego.imagen} alt={juego.nombre} className="imagenJuegoColeccionEspecifica"/>
                    </div>
                    <div className="col-12 filaNombreEliminar">
                        <div className="col-9">
                            <h3>{juego.nombre}</h3>
                        </div>
                        <div className="col-3 divBotonEliminar">
                            <button className="botonEliminar" onClick={(e) => {
                                e.preventDefault(); // evita que se dispare el Link
                                handleEliminar(juego.id);
                            }}>
                                <img src="/AlPaloDevsFront/src/assets/Iconos/eliminarBlanco.svg" alt="eliminar" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }

    return (
        <>
            {coleccionId.buscando ? (
                <AjaxLoader></AjaxLoader>
            ) : (
                <>
                    <div className="col-4 imagenColeccionEspecifica">
                        <img src={coleccionId?.coleccion.imagen} alt={coleccionId?.coleccion.nombre} />
                    </div>
                    <div className="col-8 infoColeccionEspecifica">
                        <h1>{coleccionId?.coleccion.nombre}</h1>
                        <div className="descripcionColeccionEspecifica">
                            <p>{coleccionId?.coleccion.descripcion}</p>
                        </div>
                        <div className="divEditarColeccionEspecifica">
                            <Link to={`/AlPaloDevsFront/editar-coleccion/${coleccionId?.coleccion.id}`}>Editar colección</Link>
                        </div>
                    </div>
                    <div className="col-12 juegosColeccionEspecifica">
                        <h2>Contiene:</h2>
                        <div className="listaJuegosColeccionEspecifica">
                            {coleccionId?.coleccion.juegos.map(mostrarJuegos)}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default ColeccionEspecifica;