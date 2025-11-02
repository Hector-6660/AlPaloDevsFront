import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { crearColeccion } from "../../servicios/coleccionService";
import { useNavigate } from "react-router-dom";
import "./CrearColeccion.css";

function CrearColeccion() {
    const { user } = useAuth();
    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const nuevaColeccion = {
                ...form,
                usuario_id: user.id,
            };

            const response = await crearColeccion(nuevaColeccion);
            alert("Colección creada con éxito");
            console.log("Colección creada:", response);
            navigate("/AlPaloDevsFront/perfil");

            setForm({ nombre: "", descripcion: "" });

        } catch (err) {
            console.error(err);
            alert("Error al crear la colección");
        }
    };

    return (
        <div className="row">
            <div className="col-12">
                <h2 className="tituloCrearColeccion">Crear Colección</h2>
            </div>
            <div className="col-12">
                <form className="crearColeccionForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre de la Colección</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Introduce el nombre de la colección" value={form.nombre} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Descripción</label>
                        <textarea className="form-control" id="descripcion" rows="3" placeholder="Describe tu colección" value={form.descripcion} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="botonCrearColeccion">Crear Colección</button>
                </form>
            </div>
        </div>
    );
}

export default CrearColeccion;