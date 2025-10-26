import React, { useState } from "react";
import { crearFranquicia } from "../../servicios/franquiciaService";
import { useNavigate } from "react-router-dom";
import "./FormCrearFranquicia.css";

function FormCrearFranquicia() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
    });

    const [logoFile, setLogoFile] = useState(null);
    const [imagenFile, setImagenFile] = useState(null);
    const [logoPreview, setLogoPreview] = useState("");
    const [imagenPreview, setImagenPreview] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogoChange = (e) => {
        if (e.target.files[0]) {
            setLogoFile(e.target.files[0]);
            setLogoPreview(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleImagenChange = (e) => {
        if (e.target.files[0]) {
            setImagenFile(e.target.files[0]);
            setImagenPreview(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("nombre", form.nombre);
            formData.append("descripcion", form.descripcion);
            if (logoFile) formData.append("logo", logoFile);
            if (imagenFile) formData.append("imagen", imagenFile);

            const res = await crearFranquicia(formData);

            alert("Franquicia creada con éxito");
            console.log("Respuesta servidor:", res);

            setForm({ nombre: "", descripcion: "" });
            setLogoFile(null);
            setImagenFile(null);
            setLogoPreview("");
            setImagenPreview("");
            navigate("/dashboard/franquicias");
        } catch (error) {
            console.error(error);
            alert("Error al crear la franquicia: " + error.message);
        }
    };

    return (
        <form className="formFranquicia" onSubmit={handleSubmit}>
            <div className="row col-12">
                <div className="col-6 col-md-3 divLogoFormFranquicia">
                    <label htmlFor="logoFranquicia" className="logoFranquiciaLabel">
                        {logoPreview ? (
                            <img
                                src={logoPreview}
                                alt="Logo de la franquicia"
                                className="logoFormFranquicia"
                            />
                        ) : (
                            <div className="cuadroLogo">
                                <p>Seleccionar logo</p>
                            </div>
                        )}
                        <div className="overlay">Seleccionar logo</div>
                    </label>
                    <input
                        type="file"
                        id="logoFranquicia"
                        accept="image/png"
                        onChange={handleLogoChange}
                        style={{ display: "none" }}
                    />
                </div>

                <div className="col-6 col-md-9 infoPrincipalFormFranquicia">
                    <div className="col-12 nombreFormFranquicia">
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
                    <div className="col-12 descripcionFormFranquicia">
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

            <div className="row col-12 infoSecundariaFormFranquicia">
                <div className="col-12">
                    <div className="divImagenFormFranquicia">
                        <label htmlFor="imagenFranquicia" className="imagenFranquiciaLabel">
                            {imagenPreview ? (
                                <img
                                    src={imagenPreview}
                                    alt="Imagen de la franquicia"
                                    className="imagenFormFranquicia"
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
                            id="imagenFranquicia"
                            accept="image/jpg,image/jpeg"
                            onChange={handleImagenChange}
                            style={{ display: "none" }}
                        />
                    </div>
                </div>
            </div>

            <div className="row col-12 divBotonGuardarCambiosFranquicia">
                <button type="submit" className="botonGuardarCambiosFranquicia">
                Subir Franquicia
                </button>
            </div>
        </form>
    );
}

export default FormCrearFranquicia;