import React, { useState, useEffect } from "react";
import useOneJuego from "../../hooks/useOneJuego";
import { actualizarJuego } from "../../servicios/juegoService";
import { useNavigate } from "react-router-dom";
import './FormEditarJuego.css';

function FormEditarJuego(props) {
    const idJuego = useOneJuego(props.idJuegoPantalla);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        fecha_lanzamiento: "",
        plataforma: "",
        genero: "",
        autor: "",
        franquicia_id: "",
        tiene_demo: "",
    });
    const [fotoPreview, setFotoPreview] = useState("");
    const [fotoFile, setFotoFile] = useState(null);

    useEffect(() => {
        if (!idJuego.buscando && idJuego.juego) {
            setForm({
                nombre: idJuego.juego.nombre || "",
                descripcion: idJuego.juego.descripcion || "",
                fecha_lanzamiento: idJuego.juego.fecha_lanzamiento || "",
                plataforma: idJuego.juego.plataforma || "",
                genero: idJuego.juego.genero || "",
                autor: idJuego.juego.autor || "",
                franquicia_id: idJuego.juego.franquicia_id || "",
                tiene_demo: idJuego.juego.tiene_demo ? "1" : "0",
            });
            setFotoPreview(idJuego.juego.imagen || "");
        }
    }, [idJuego.buscando, idJuego.juego]);

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
            formData.append("fecha_lanzamiento", form.fecha_lanzamiento);
            formData.append("plataforma", form.plataforma);
            formData.append("genero", form.genero);
            formData.append("autor", form.autor);
            formData.append("franquicia_id", form.franquicia_id);
            formData.append("tiene_demo", form.tiene_demo === "1" ? 1 : 0);

            if (fotoFile) {
                formData.append("imagen", fotoFile);
            }

            await actualizarJuego(props.idJuegoPantalla, formData);
            alert("Juego actualizado con éxito");
            navigate("/AlPaloDevsFront/dashboard/juegos");
        } catch (error) {
            console.error(error);
            alert("Error al actualizar el juego: " + error.message);
        }
    };

    return (
        <form className="formJuego" onSubmit={handleSubmit}>
            <div className="row col-12">
                <div className="col-6 col-md-3">
                    <label htmlFor="imagenJuego" className="imagenJuegoLabel">
                        {fotoPreview && (
                            <img src={fotoPreview} alt="Portada del juego" className="imagenFormJuego"/>
                        )}
                        <div className="overlay">Cambiar foto</div>
                    </label>
                    <input type="file" id="imagenJuego" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
                </div>
                <div className="col-6 col-md-9 infoPrincipalFormJuego">
                    <div className="col-12 nombreFormJuego">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required value={form.nombre} onChange={handleChange} className="form-control"/>
                    </div>
                    <div className="col-12 descripcionFormJuego">
                        <label htmlFor="descripcion">Descripción:</label>
                        <textarea id="descripcion" name="descripcion" required placeholder="Escribe tu opinión aquí..." value={form.descripcion} onChange={handleChange} className="form-control"></textarea>
                    </div>
                </div>
            </div>
            <div className="row col-12 infoSecundariaFormJuego">
                <div className="col-12">
                    <label htmlFor="fecha_lanzamiento">Fecha de lanzamiento:</label>
                    <input type="date" id="fecha_lanzamiento" name="fecha_lanzamiento" required value={form.fecha_lanzamiento} onChange={handleChange} className="form-control"/>
                </div>
                <div className="col-12">
                    <label htmlFor="plataforma">Plataforma:</label>
                    <input type="text" id="plataforma" name="plataforma" required value={form.plataforma} onChange={handleChange} className="form-control"/>
                </div>
                <div className="col-12">
                    <label htmlFor="genero">Género:</label>
                    <input type="text" id="genero" name="genero" required value={form.genero} onChange={handleChange} className="form-control"/>
                </div>
                <div className="col-12">
                    <label htmlFor="autor">Autor:</label>
                    <input type="text" id="autor" name="autor" required value={form.autor} onChange={handleChange} className="form-control"/>
                </div>
                <div className="col-12 infoAdicionalFormJuego">
                    <div className="col-6">
                        <label htmlFor="franquicia_id">Id de la franquicia:</label>
                        <input type="number" id="franquicia_id" name="franquicia_id" required value={form.franquicia_id} onChange={handleChange} className="form-control"/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="tieneDemo">¿Tiene demo?</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="tiene_demo" id="demo_si" value="1" checked={form.tiene_demo === "1" || form.tiene_demo === true} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="demo_si">Sí</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="tiene_demo" id="demo_no" value="0" checked={form.tiene_demo === "0" || form.tiene_demo === false} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="demo_no">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row col-12 divBotonGuardarCambiosJuego">
                <button type="submit" className="botonGuardarCambiosJuego">Guardar Juego</button>
            </div>
        </form>
    );
}

export default FormEditarJuego;
