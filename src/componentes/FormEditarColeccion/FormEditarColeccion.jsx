import React, { useState } from "react";
import useOneColeccion from "../../hooks/useOneColeccion";
import { actualizarColeccion } from "../../servicios/coleccionService";
import { useNavigate } from "react-router-dom";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import './FormEditarColeccion.css';

function FormEditarColeccion(props) {
    const coleccionId = useOneColeccion(props.idColeccion);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        imagen: null,
    });

    // Se rellena cuando cargan los datos
    React.useEffect(() => {
        if (!coleccionId.buscando && coleccionId.coleccion) {
            setForm({
            nombre: coleccionId.coleccion.nombre,
            descripcion: coleccionId.coleccion.descripcion,
            imagen: null,
            });
        }
    }, [coleccionId.buscando]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setForm({ ...form, imagen: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();
            data.append("nombre", form.nombre);
            data.append("descripcion", form.descripcion);
            if (form.imagen) {
                data.append("imagen", form.imagen);
            }

            const resp = await actualizarColeccion(props.idColeccion, data);
            alert("Colección actualizada con éxito");
            console.log("Colección actualizada:", resp);
            navigate("/coleccion/" + props.idColeccion);

        } catch (err) {
            console.error(err);
            alert("Error al actualizar la colección");
        }
    };

    return (
        <>
            {coleccionId.buscando ? (
                <AjaxLoader></AjaxLoader>
            ) : (
                <div className="EditarColeccion">
                    <div className="col-12 headerEditarColeccion">
                        <h2>Editar Colección: {coleccionId.coleccion.nombre}</h2>
                    </div>
                    <form className="formEditarColeccion" onSubmit={handleSubmit}>
                        <div className="col-4 imagenEditarColeccion">
                            <label htmlFor="fotoColeccionInput" className="fotoColeccionInputLabel">
                                <img src={coleccionId.coleccion.imagen} alt="Foto de la colección" className="fotoColeccionInput" />
                                <div className="overlay">Cambiar foto</div>
                            </label>
                            <input type="file" id="fotoColeccionInput" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
                        </div>
                        <div className="col-8 EditarColeccionContainer">
                            <div className="col-12 infoEditarColeccion">
                                <input type="text" name="nombre" className="tituloEditarColeccion" value={form.nombre} onChange={handleChange} />
                                <textarea name="descripcion" className="descripcionEditarColeccion" value={form.descripcion} onChange={handleChange} />
                            </div>
                            <div className="col-12">
                                <button className="botonGuardarCambiosColeccion">Guardar Cambios</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default FormEditarColeccion;