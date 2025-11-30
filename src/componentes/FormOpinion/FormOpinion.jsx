import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { crearOpinion, borrarOpinion, actualizarOpinion, obtenerOpinionUsuario } from "../../servicios/opinionService";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import './FormOpinion.css';

function FormOpinion(props) {
    const { user, loading } = useAuth();
    const [form, setForm] = useState({ titulo: "", contenido: "", puntuacion: "" });
    const [opinionExistente, setOpinionExistente] = useState(null);

    // Cargar opinión existente al montar el componente
    useEffect(() => {
        // Si hay un usuario autenticado, obtener su opinión para el juego dado
        if (user) {
            obtenerOpinionUsuario(user.id, props.juegoId).then(data => {
                // Si hay una opinión existente, cargarla en el estado
                if (data && data.id) {
                    setOpinionExistente(data);
                    setForm({
                        titulo: data.titulo,
                        contenido: data.contenido,
                        puntuacion: String(data.puntuacion),
                    });
                } else {
                    setOpinionExistente(null);
                    setForm({ titulo: "", contenido: "", puntuacion: "" });
                }
            });
        }
    }, [user, props.juegoId]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Preparar los datos para enviar
            const payload = {
                ...form,
                puntuacion: parseInt(form.puntuacion, 10),
            };

            // Llamar a la API para actualizar o crear la opinión
            let resp;
            if (opinionExistente) {
                resp = await actualizarOpinion(opinionExistente.id, payload);
                alert("Opinión actualizada");
            } else {
                resp = await crearOpinion({ ...payload, usuario_id: user.id, juego_id: props.juegoId });
                alert("Opinión publicada");
            }

            // Actualizar el estado con la opinión resultante
            setOpinionExistente(resp.opinion);
            setForm({
                titulo: resp.opinion.titulo,
                contenido: resp.opinion.contenido,
                puntuacion: String(resp.opinion.puntuacion),
            });

        } catch (err) {
            console.error(err);
            alert("Error al guardar la opinión");
        }
    };

    const handleBorrar = async () => {
        // Confirmar y borrar la opinión existente
        if (opinionExistente && window.confirm("¿Seguro que quieres borrar esta opinión?")) {
            await borrarOpinion(opinionExistente.id);
            alert("Opinión eliminada");
            setForm({ titulo: "", contenido: "", puntuacion: "" });
            setOpinionExistente(null);
        }
    };

    function mostrarFormularioOpinion(usuario) {
        if (!usuario) {
            return <p>No hay usuario autenticado.</p>;
        }

        return (
            <>
                <h2>{opinionExistente ? "Tu opinión" : "Deja tu opinión"}</h2>
                <form className="formOpinion" onSubmit={handleSubmit}>
                    <div className="row datosSuperioresFormOpinion">
                        <div className="col-12 col-sm-6 col-md-1 datosSuperioresFormOpinion_1">
                            <img src={usuario.foto_perfil} alt="Foto de perfil" className="fotoPerfilFormOpinion"></img>
                        </div>
                        <div className="col-12 col-sm-6 col-md-5 datosSuperioresFormOpinion_2">
                            <p>{usuario.nick}</p>
                            <input type="text" id="titulo" name="titulo" required placeholder="Título" className="d-none d-md-block titulo1" value={form.titulo || ""} onChange={handleChange} />
                            <input type="text" id="titulo" name="titulo" required placeholder="Título" className="d-block d-md-none titulo2" value={form.titulo || ""} onChange={handleChange} />
                        </div>
                        <div className="col-6 d-none d-md-block datosSuperioresFormOpinion_3">
                            <div className="notaFormOpinion">
                                <label htmlFor="puntuacion">Puntuación (0-100):</label>
                                <input type="number" id="puntuacion" name="puntuacion" min="0" max="100" required value={form.puntuacion || ""} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-12 d-block d-md-none datosSuperioresFormOpinion_4">
                            <div className="notaFormOpinion2">
                                <label htmlFor="puntuacion">Puntuación (0-100):</label>
                                <input type="number" id="puntuacion" name="puntuacion" min="0" max="100" required value={form.puntuacion || ""} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row datosInferioresFormOpinion">
                        <textarea id="contenido" name="contenido" required placeholder="Escribe tu opinión aquí..." value={form.contenido || ""} onChange={handleChange}></textarea>
                        <div className="col-12 botonesFormOpinion">
                            <button type="submit" className="botonPublicarOpinion">
                                {opinionExistente ? "Actualizar opinión" : "Publicar opinión"}
                            </button>
                            <div className="botonEliminarOpinionContainer">
                                <button type="button" onClick={handleBorrar} className="botonEliminarOpinion" disabled={!opinionExistente}>Eliminar Opinión</button>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        );
    }

    return (
        <>
            {loading ? (
                <AjaxLoader />
            ) : (
                <div className="col-12 formOpinion">
                    {mostrarFormularioOpinion(user)}
                </div>
            )}
        </>
    );
}

export default FormOpinion;