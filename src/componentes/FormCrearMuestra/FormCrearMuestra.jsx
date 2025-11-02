import React, { useState } from "react";
import { crearDemo } from "../../servicios/muestraService";
import { useNavigate } from "react-router-dom";
import "./FormCrearMuestra.css";

function FormCrearMuestra() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nombre: "",
        mainScript: "",
        juego_id: "",
    });

    const [fotoPreview, setFotoPreview] = useState("");
    const [fotoFile, setFotoFile] = useState(null);
    const [zipFile, setZipFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setFotoFile(file);
        setFotoPreview(URL.createObjectURL(file));
    };

    const handleZipChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.name.endsWith(".zip")) {
            alert("Por favor, selecciona un archivo ZIP válido");
            return;
        }
        setZipFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("nombre", form.nombre);
            formData.append("mainScript", form.mainScript);
            formData.append("juego_id", form.juego_id);

            if (fotoFile) formData.append("imagen", fotoFile);
            if (zipFile) formData.append("carpeta_demo", zipFile);

            const res = await crearDemo(formData);

            alert("Demo creada con éxito");
            console.log("Respuesta servidor:", res);

            // Reset formulario
            setForm({ nombre: "", mainScript: "", juego_id: "" });
            setFotoPreview("");
            setFotoFile(null);
            setZipFile(null);
            navigate("/AlPaloDevsFront/dashboard/muestras");
        } catch (error) {
            console.error(error);
            alert("Error al crear la demo: " + error.message);
        }
    };

    return (
        <form className="formMuestra" onSubmit={handleSubmit}>
            <div className="row col-12">
                <div className="col-6 col-md-3">
                    <label htmlFor="imagenDemo" className="imagenMuestraLabel">
                        {fotoPreview ? (
                            <img
                                src={fotoPreview}
                                alt="Portada de la demo"
                                className="imagenFormMuestra"
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
                        id="imagenDemo"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                </div>

                <div className="col-6 col-md-9 infoPrincipalFormMuestra">
                    <div className="col-12 nombreFormMuestra">
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

                    <div className="col-6">
                        <label htmlFor="juego_id">ID del juego:</label>
                        <input
                            type="number"
                            id="juego_id"
                            name="juego_id"
                            required
                            value={form.juego_id}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
            </div>

            <div className="row col-12 infoSecundariaFormMuestra">
                <div className="col-6">
                    <label htmlFor="mainScript">Archivo principal (mainScript):</label>
                    <input
                        type="text"
                        id="mainScript"
                        name="mainScript"
                        required
                        placeholder="main.js"
                        value={form.mainScript}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="col-6">
                    <label htmlFor="carpeta_demo">Carpeta ZIP del juego:</label>
                    <input
                        type="file"
                        id="carpeta_demo"
                        name="carpeta_demo"
                        accept=".zip"
                        required
                        onChange={handleZipChange}
                        className="form-control"
                    />
                </div>
            </div>

            <div className="row col-12 divBotonGuardarCambiosMuestra">
                <button type="submit" className="botonGuardarCambiosMuestra">
                    Subir Muestra
                </button>
            </div>
        </form>
    );
}

export default FormCrearMuestra;
