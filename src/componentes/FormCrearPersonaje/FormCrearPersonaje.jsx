import React, { useState } from "react";
import { crearPersonaje } from "../../servicios/personajeService";
import { useNavigate } from "react-router-dom";

function FormCrearPersonaje() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        franquicia_id: ""
    });

    const [fotoPreview, setFotoPreview] = useState("");
    const [fotoFile, setFotoFile] = useState(null);

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
            Object.entries(form).forEach(([key, value]) =>
                formData.append(key, value)
            );
            if (fotoFile) formData.append("imagen", fotoFile);

            const res = await crearPersonaje(formData);

            alert("Personaje creado con éxito");
            console.log("Respuesta servidor:", res);

            setForm({ nombre: "", descripcion: "", franquicia_id: "" });
            setFotoPreview("");
            setFotoFile(null);
            navigate('/dashboard/personajes');
        } catch (error) {
            console.error(error);
            alert("Error al crear el personaje: " + error.message);
        }
    };

    return (
        <form className="formPersonaje" onSubmit={handleSubmit}>
            <div className="row col-12">
                <div className="col-6 col-md-3">
                    <label htmlFor="imagenPersonaje" className="imagenPersonajeLabel">
                        {fotoPreview ? (
                            <img
                                src={fotoPreview}
                                alt="Portada del personaje"
                                className="imagenFormPersonaje"
                            />
                        ) : (
                            <div className="cuadroImagen">
                                <p>Seleccionar imagen</p>
                            </div>
                        )}
                        <div className="overlay">Seleccionar imagen</div>
                    </label>
                    <input
                        type="file"
                        id="imagenPersonaje"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                </div>
                <div className="col-6 col-md-9 infoPrincipalFormPersonaje">
                    <div className="col-12 nombreFormPersonaje">
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            required
                            value={form.nombre}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-12 descripcionFormPersonaje">
                        <label htmlFor="descripcion">Descripción:</label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            required
                            placeholder="Describe brevemente el personaje..."
                            value={form.descripcion}
                            onChange={handleChange}
                            className="form-control"
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className="row col-12 infoSecundariaFormPersonaje">
                <div className="col-12 infoAdicionalFormPersonaje">
                    <div className="col-6">
                        <label htmlFor="franquicia_id">ID de la franquicia:</label>
                        <input
                            type="number"
                            id="franquicia_id"
                            name="franquicia_id"
                            value={form.franquicia_id}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
            </div>

            <div className="row col-12 divBotonGuardarCambiosPersonaje">
                <button type="submit" className="botonGuardarCambiosPersonaje">
                    Subir Personaje
                </button>
            </div>
        </form>
    );
}

export default FormCrearPersonaje;
