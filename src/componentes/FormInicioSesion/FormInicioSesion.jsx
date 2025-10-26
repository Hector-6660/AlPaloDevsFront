import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { login as loginService } from "../../servicios/authService";
import "./FormInicioSesion.css";

function FormInicioSesion() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const usuario = await loginService(form); // devuelve el usuario directamente
            login(usuario); // actualiza el contexto
            navigate("/"); // redirige al inicio
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            alert(error.message || "Error al iniciar sesión");
        }
    };

    return (
        <form className="formInicioSesion" onSubmit={handleSubmit}>
            <div className="col-12 campo">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="email" name="email" required value={form.email} onChange={handleChange} />
            </div>
            <div className="col-12 campo">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" name="password" required value={form.password} onChange={handleChange} />
            </div>
            <button type="submit" className="botonInicioSesion">Iniciar sesión</button>
            <div className="col-12">
                <p>¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link></p>
            </div>
            <div className="col-12 fin">
                <p><a href="/recuperar-contrasena">¿Olvidaste tu contraseña?</a></p>
            </div>
        </form>
    );
}

export default FormInicioSesion;