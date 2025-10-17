import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Menu.css";

function Menu() {
    const { user } = useAuth();

    return (
        <div className="row sticky-top">
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbarMenu">
                <div className="container-fluid menu">
                    <Link className="enlaceLogo" to="/">
                        <img src="/src/assets/Logo/logoFondoNegro.png" className="logoMenu"></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link enlace" to="/juegos">Juegos</Link>
                            <Link className="nav-link enlace" to="/muestras">Juegos de muestra</Link>
                            <Link className="nav-link enlace" to="/nosotros">Sobre nosotros</Link>
                            <Link className="nav-link enlace" to="/contacto">Contacto</Link>
                            <div className="registroInicioContainer">
                                {user ? (
                                    <Link to="/perfil">
                                        <img src={`${user.foto_perfil}`} alt="Foto perfil" className="fotoPerfilMenu" />
                                    </Link>
                                ) : (
                                    <p className="textoMenu">
                                        <Link className="nav-link registroInicio" to="/registro">Regístrate</Link> /
                                        <Link className="nav-link registroInicio" to="/inicio-sesion">Iniciar sesión</Link>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menu;