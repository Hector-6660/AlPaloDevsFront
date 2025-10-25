import React, { useState } from "react";
import { crearJuego } from "../../servicios/juegoService";

function FormCrearJuego() {
    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        fecha_lanzamiento: "",
        plataforma: "",
        genero: "",
        autor: "",
        franquicia_id: "",
        tiene_demo: "0",
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
            Object.entries(form).forEach(([key, value]) => {
                formData.append(key, value);
            });
            if (fotoFile) formData.append("imagen", fotoFile);

            const res = await crearJuego(formData);

            alert("Juego creado con éxito");
            console.log("Respuesta servidor:", res);

            // Reiniciar formulario
            setForm({
                nombre: "",
                descripcion: "",
                fecha_lanzamiento: "",
                plataforma: "",
                genero: "",
                autor: "",
                franquicia_id: "",
                tiene_demo: "0",
            });
            setFotoPreview("");
            setFotoFile(null);
        } catch (error) {
            console.error(error);
            alert("Error al crear el juego");
        }
    };

    return (
        <form className="formJuego" onSubmit={handleSubmit}>
            <div className="row col-12">
                <div className="col-6 col-md-3">
                    <label htmlFor="imagenJuego" className="imagenJuegoLabel">
                        {fotoPreview ? (
                            <img
                                src={fotoPreview}
                                alt="Portada del juego"
                                className="imagenFormJuego"
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
                        id="imagenJuego"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                </div>
                <div className="col-6 col-md-9 infoPrincipalFormJuego">
                    <div className="col-12 nombreFormJuego">
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
                    <div className="col-12 descripcionFormJuego">
                        <label htmlFor="descripcion">Descripción:</label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            required
                            placeholder="Describe brevemente el juego..."
                            value={form.descripcion}
                            onChange={handleChange}
                            className="form-control"
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className="row col-12 infoSecundariaFormJuego">
                <div className="col-12">
                    <label htmlFor="fecha_lanzamiento">Fecha de lanzamiento:</label>
                    <input
                        type="date"
                        id="fecha_lanzamiento"
                        name="fecha_lanzamiento"
                        required
                        value={form.fecha_lanzamiento}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="plataforma">Plataforma:</label>
                    <input
                        type="text"
                        id="plataforma"
                        name="plataforma"
                        required
                        value={form.plataforma}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="genero">Género:</label>
                    <input
                        type="text"
                        id="genero"
                        name="genero"
                        required
                        value={form.genero}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="autor">Autor:</label>
                    <input
                        type="text"
                        id="autor"
                        name="autor"
                        required
                        value={form.autor}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="col-12 infoAdicionalFormJuego">
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
                    <div className="col-6">
                        <label htmlFor="tieneDemo">¿Tiene demo?</label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="tiene_demo"
                                id="demo_si"
                                value="1"
                                checked={form.tiene_demo === "1"}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="demo_si">
                                Sí
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="tiene_demo"
                                id="demo_no"
                                value="0"
                                checked={form.tiene_demo === "0"}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="demo_no">
                                No
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row col-12 divBotonGuardarCambiosJuego">
                <button type="submit" className="botonGuardarCambiosJuego">
                    Subir Juego
                </button>
            </div>
        </form>
    );
}

export default FormCrearJuego;
