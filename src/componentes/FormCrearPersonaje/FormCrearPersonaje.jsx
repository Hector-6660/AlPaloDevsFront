import React, { useState } from "react";
import { crearPersonaje } from "../../servicios/personajeService";

function FormCrearPersonaje() {
    const [form, setForm] = useState({
        nombre: "",
        descripcion: ""
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
            formData.append("nombre", form.nombre);
            formData.append("descripcion", form.descripcion);

            if (fotoFile) {
                formData.append("imagen", fotoFile);
            }

            const token = localStorage.getItem("token");

            const res = await fetch("http://alpalodevs.test/api/v1/juegos", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await res.json();

            if (res.ok) {
                alert("Juego subido con éxito");
                // Reiniciar formulario
                setForm({
                    nombre: "",
                    descripcion: ""
                });
                setFotoPreview("");
                setFotoFile(null);
            } else {
                console.error("Error al subir el juego:", data);
                alert(data.message || "Error al subir el juego");
            }
        } catch (error) {
            console.error(error);
            alert("Error al enviar el formulario");
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
                                <p>Seleccionar logo</p>
                            </div>
                        )}
                        <div className="overlay">Seleccionar logo</div>
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
            </div>

            <div className="row col-12 divBotonGuardarCambiosJuego">
                <button type="submit" className="botonGuardarCambiosJuego">
                    Subir Juego
                </button>
            </div>
        </form>
    );
}

export default FormCrearPersonaje;
