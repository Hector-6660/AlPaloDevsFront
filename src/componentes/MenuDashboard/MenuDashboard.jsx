import React from "react";
import { Link } from "react-router-dom";
import "./MenuDashboard.css";

function MenuDashboard() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbarMenu">
                <div className="container-fluid menuDashboard">
                    <div className="navbar-nav m-auto navDashboard">
                        <Link className="nav-link enlaceDashboard" to="/AlPaloDevsFront/dashboard/juegos">Juegos</Link>
                        <Link className="nav-link enlaceDashboard" to="/AlPaloDevsFront/dashboard/franquicias">Franquicias</Link>
                        <Link className="nav-link enlaceDashboard" to="/AlPaloDevsFront/dashboard/personajes">Personajes</Link>
                        <Link className="nav-link enlaceDashboard" to="/AlPaloDevsFront/dashboard/muestras">Muestras</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default MenuDashboard;