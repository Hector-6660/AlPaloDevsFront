import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Menu.css";

import logoFondoNegro from "/src/assets/Logo/logoFondoNegro.png";

function Menu() {
    const { user } = useAuth();

    return (
        <div className="row sticky-top">
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbarMenu">
                <div className="container-fluid menu">
                    <Link className="enlaceLogo" to="/AlPaloDevsFront/">
                        <img src={logoFondoNegro} className="logoMenu"></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link enlace" to="/AlPaloDevsFront/juegos">Juegos</Link>
                            <Link className="nav-link enlace" to="/AlPaloDevsFront/muestras">Juegos de muestra</Link>
                            <Link className="nav-link enlace" to="/AlPaloDevsFront/nosotros">Sobre nosotros</Link>
                            <Link className="nav-link enlace" to="/AlPaloDevsFront/contacto">Contacto</Link>
                            <div className="registroInicioContainer">
                                {user ? (
                                    <Link to="/AlPaloDevsFront/perfil">
                                        <img src={`${user.foto_perfil}`} alt="Foto perfil" className="fotoPerfilMenu" />
                                    </Link>
                                ) : (
                                    <p className="textoMenu">
                                        <Link className="nav-link registroInicio" to="/AlPaloDevsFront/registro">Regístrate</Link> /
                                        <Link className="nav-link registroInicio" to="/AlPaloDevsFront/inicio-sesion">Iniciar sesión</Link>
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