import React, { useState, useEffect } from "react";
import useOneFranquicia from "../../hooks/useOneFranquicia";
import { actualizarFranquicia } from "../../servicios/franquiciaService";

function FormEditarFranquicia({ idFranquiciaPantalla }) {
    const idFranquicia = useOneFranquicia(idFranquiciaPantalla);

    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
    });

    const [logoPreview, setLogoPreview] = useState("");
    const [imagenPreview, setImagenPreview] = useState("");
    const [logoFile, setLogoFile] = useState(null);
    const [imagenFile, setImagenFile] = useState(null);

    // Cargar datos de la franquicia existente
    useEffect(() => {
        if (!idFranquicia.buscando && idFranquicia.franquicia) {
            const f = idFranquicia.franquicia;
            setForm({
                nombre: f.nombre || "",
                descripcion: f.descripcion || "",
            });
            setLogoPreview(f.logo || "");
            setImagenPreview(f.imagen || "");
        }
    }, [idFranquicia.buscando, idFranquicia.franquicia]);

    // Manejadores de cambio de texto
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // Manejadores de archivos
    const handleLogoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setLogoFile(file);
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    const handleImagenChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImagenFile(file);
            setImagenPreview(URL.createObjectURL(file));
        }
    };

    // Envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("nombre", form.nombre);
            formData.append("descripcion", form.descripcion);

            if (logoFile) formData.append("logo", logoFile);
            if (imagenFile) formData.append("imagen", imagenFile);

            await actualizarFranquicia(idFranquiciaPantalla, formData);
            alert("Franquicia actualizada con éxito");
        } catch (error) {
            console.error(error);
            alert("Error al actualizar la franquicia");
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
                        <div className="overlay">Cambiar logo</div>
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
                            placeholder="Describe brevemente la franquicia..."
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
                            <div className="overlay">Cambiar imagen</div>
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
                    Guardar cambios
                </button>
            </div>
        </form>
    );
}

export default FormEditarFranquicia;
