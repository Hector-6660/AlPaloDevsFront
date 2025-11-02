import React from "react";
import { register } from "../../servicios/authService";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./FormRegistro.css";

function FormRegistro() {
    const [form, setForm] = React.useState({
        nombre: "",
        nick: "",
        email: "",
        password: ""
    });

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setForm({
        ...form,
        [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!form.nombre || !form.nick || !form.email || !form.password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            const data = await register(form);
            login(data.usuario);
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Error al registrar usuario");
        }
    };

    return (
        <form className="formRegistro" onSubmit={handleSubmit}>
            <div className="col-12 campo">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" required value={form.nombre} name="nombre" onChange={handleChange}/>
            </div>
            <div className="col-12 campo">
                <label htmlFor="nick" className="form-label">Nick</label>
                <input type="text" className="form-control" id="nick" required value={form.nick} name="nick" onChange={handleChange}/>
            </div>
            <div className="col-12 campo">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="email" required value={form.email} name="email" onChange={handleChange}/>
            </div>
            <div className="col-12 campo">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" required value={form.password} name="password" onChange={handleChange}/>
            </div>
            <button type="submit" className="botonRegistro">Registrarse</button>
            <div className="col-12 fin">
                <p>¿Ya tienes una cuenta? <Link to="/AlPaloDevsFront/inicio-sesion">Inicia sesión aquí</Link></p>
            </div>
        </form>
    );
}

export default FormRegistro;