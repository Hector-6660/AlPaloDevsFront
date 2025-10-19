import React, { useState, useEffect } from "react";
import useOnePersonaje from "../../hooks/useOnePersonaje";
import { actualizarPersonaje } from "../../servicios/personajeService";
import './FormEditarPersonaje.css';

function FormEditarPersonaje(props) {
    const idPersonaje = useOnePersonaje(props.idPersonajePantalla);
    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        franquicia_id: ""
    });
    const [fotoPreview, setFotoPreview] = useState("");
    const [fotoFile, setFotoFile] = useState(null);

    useEffect(() => {
        if (!idPersonaje.buscando && idPersonaje.personaje) {
            setForm({
                nombre: idPersonaje.personaje.nombre || "",
                descripcion: idPersonaje.personaje.descripcion || "",
                franquicia_id: idPersonaje.personaje.franquicia_id || ""
            });
            setFotoPreview(idPersonaje.personaje.imagen || "");
        }
    }, [idPersonaje.buscando, idPersonaje.personaje]);

    const handleChange = (e) => {
        const { name, value } = e.target;
            setForm((prev) => ({
                ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFotoFile(file);
            setFotoPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("nombre", form.nombre);
            formData.append("descripcion", form.descripcion);
            formData.append("franquicia_id", form.franquicia_id);

            if (fotoFile) {
                formData.append("imagen", fotoFile);
            }

            await actualizarPersonaje(props.idPersonajePantalla, formData);
            alert("Personaje actualizado con éxito");
        } catch (error) {
            console.error(error);
            alert("Error al actualizar el personaje");
        }
    };

    return (
        <form className="formPersonaje" onSubmit={handleSubmit}>
            <div className="row col-12">
                <div className="col-6 col-md-3">
                    <label htmlFor="imagenPersonaje" className="imagenPersonajeLabel">
                        {fotoPreview && (
                            <img src={fotoPreview} alt="Portada del personaje" className="imagenFormPersonaje"/>
                        )}
                        <div className="overlay">Cambiar foto</div>
                    </label>
                    <input type="file" id="imagenPersonaje" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
                </div>
                <div className="col-6 col-md-9 infoPrincipalFormPersonaje">
                    <div className="col-12 nombreFormPersonaje">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required value={form.nombre} onChange={handleChange} className="form-control"/>
                    </div>
                    <div className="col-12 descripcionFormPersonaje">
                        <label htmlFor="descripcion">Descripción:</label>
                        <textarea id="descripcion" name="descripcion" required placeholder="Escribe tu opinión aquí..." value={form.descripcion} onChange={handleChange} className="form-control"></textarea>
                    </div>
                </div>
            </div>
            <div className="row col-12 infoSecundariaFormPersonaje">
                <div className="col-12 infoAdicionalFormPersonaje">
                    <div className="col-6">
                        <label htmlFor="franquicia_id">Id de la franquicia:</label>
                        <input type="number" id="franquicia_id" name="franquicia_id" required value={form.franquicia_id} onChange={handleChange} className="form-control"/>
                    </div>
                </div>
            </div>
            <div className="row col-12 divBotonGuardarCambiosPersonaje">
                <button type="submit" className="botonGuardarCambiosPersonaje">Guardar Personaje</button>
            </div>
        </form>
    );
}

export default FormEditarPersonaje;
