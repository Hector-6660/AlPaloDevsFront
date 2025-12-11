import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { deleteAccount } from "../../servicios/authService";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import "./DatosUsuario.css";

import editarVerde from "/src/assets/Iconos/editarVerde.svg";
import cerrarSesion from "/src/assets/Iconos/cerrarSesion.svg";

function DatosUsuario() {
    const { user, logout, loading } = useAuth();

    const handleDelete = async () => {
        if (!user) return;

        const confirmDelete = window.confirm("¿Seguro que quieres borrar tu cuenta? Esta acción no se puede deshacer.");
        if (!confirmDelete) return;

        try {
            await deleteAccount(user.id);
            logout();
        } catch (error) {
            console.error("Error al borrar la cuenta:", error);
            alert("No se pudo borrar la cuenta. Intenta de nuevo.");
        }
    };

    function mostrarDatosUsuario(usuario) {
        if (!usuario) {
            return <p>No hay usuario autenticado.</p>;
        }

        return (
            <div className="col-12 datosUsuario">
                <div className="col-12 d-flex row">
                    <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
                        <img src={usuario.foto_perfil} alt="Foto de perfil" className="fotoPerfilUsuario" />
                    </div>
                    <div className="col-6 col-md-8 informacionUsuario">
                        <h1>{usuario.nick}</h1>
                        <h3>{usuario.nombre}</h3>
                        <p>Email: {usuario.email}</p>
                        <div className="d-none d-md-flex row accionesUsuario">
                            <Link to="/AlPaloDevsFront/editar-perfil" className="editarPerfil"><img src={editarVerde} alt="Editar perfil" /> Editar perfil</Link>
                            <button onClick={logout} className="cerrarSesion"><img src={cerrarSesion} alt="Cerrar sesión" /> Cerrar sesión</button>
                            <button onClick={handleDelete} className="borrarPerfil">Borrar cuenta</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 d-md-flex row d-md-none accionesUsuario">
                    <Link to="/AlPaloDevsFront/editar-perfil" className="editarPerfil"><img src={editarVerde} alt="Editar perfil" /> Editar perfil</Link>
                    <button onClick={logout} className="cerrarSesion"><img src={cerrarSesion} alt="Cerrar sesión" /> Cerrar sesión</button>
                    <button onClick={handleDelete} className="borrarPerfil">Borrar cuenta</button>
                </div>
            </div>
        );
    }

    return (
        <div className="col-12">
            {loading ? (
                <AjaxLoader />
            ) : (
                <div className="row">
                    {mostrarDatosUsuario(user)}
                </div>
            )}
        </div>
    );
}

export default DatosUsuario;