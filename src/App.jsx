import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./componentes/ProtectedRoute/ProtectedRoute";

import Inicio from './paginas/Inicio/Inicio'
import Juegos from './paginas/Juegos/Juegos'
import Juego from './paginas/Juego/Juego'
import Muestras from './paginas/Muestras/Muestras'
import Muestra from './paginas/Muestra/Muestra'
import Contacto from './paginas/Contacto/Contacto'
import Nosotros from './paginas/SobreNosotros/SobreNosotros'
import Perfil from './paginas/Perfil/Perfil'
import EditarPerfil from './paginas/EditarPerfil/EditarPerfil'
import Franquicia from './paginas/Franquicia/Franquicia'
import Coleccion from './paginas/Coleccion/Coleccion'
import CrearColeccion from './paginas/CrearColeccion/CrearColeccion'
import EditarColeccion from './paginas/EditarColeccion/EditarColeccion'
import Registro from './paginas/Registro/Registro'
import InicioSesion from './paginas/InicioSesion/InicioSesion'
import Menu from './componentes/Menu/Menu'
import MenuDashboard from './componentes/MenuDashboard/MenuDashboard'
import PieDePagina from './componentes/PieDePagina/PieDePagina'

import DJuegos from './paginas/DJuegos/DJuegos'
import DJuegosC from './paginas/DJuegosC/DJuegosC'
import DJuegosE from './paginas/DJuegosE/DJuegosE'
import DFranquicias from './paginas/DFranquicias/DFranquicias'
import DFranquiciasC from './paginas/DFranquiciasC/DFranquiciasC'
import DFranquiciasE from './paginas/DFranquiciasE/DFranquiciasE'
import DPersonajes from './paginas/DPersonajes/DPersonajes'
import DPersonajesC from './paginas/DPersonajesC/DPersonajesC'
import DPersonajesE from './paginas/DPersonajesE/DPersonajesE'
import DMuestras from './paginas/DMuestras/DMuestras';
import DMuestrasC from './paginas/DMuestrasC/DMuestrasC';
import DMuestrasE from './paginas/DMuestrasE/DMuestrasE';
import './App.css'

function App() {
  const { user } = useAuth();

  return (
    <>
      <div id="top"></div>
      <Menu></Menu>
      {user?.rol === "admin" && (
        <MenuDashboard></MenuDashboard>
      )}

      <Routes>
        <Route path="/AlPaloDevsFront/" element={<Inicio></Inicio>} />
        <Route path="/AlPaloDevsFront/juegos" element={<Juegos></Juegos>} />
        <Route path="/AlPaloDevsFront/juego/:id" element={<Juego></Juego>} />
        <Route path="/AlPaloDevsFront/muestras" element={<Muestras></Muestras>} />
        <Route path="/AlPaloDevsFront/muestra/:id" element={<Muestra></Muestra>} />
        <Route path="/AlPaloDevsFront/contacto" element={<Contacto></Contacto>} />
        <Route path="/AlPaloDevsFront/nosotros" element={<Nosotros></Nosotros>} />
        <Route path="/AlPaloDevsFront/perfil" element={<Perfil></Perfil>} />
        <Route path="/AlPaloDevsFront/editar-perfil" element={<EditarPerfil></EditarPerfil>} />
        <Route path="/AlPaloDevsFront/franquicia/:id" element={<Franquicia></Franquicia>} />
        <Route path="/AlPaloDevsFront/coleccion/:id" element={<Coleccion></Coleccion>} />
        <Route path="/AlPaloDevsFront/crear-coleccion" element={<CrearColeccion></CrearColeccion>} />
        <Route path="/AlPaloDevsFront/editar-coleccion/:id" element={<EditarColeccion></EditarColeccion>} />
        <Route path="/AlPaloDevsFront/registro" element={<Registro></Registro>} />
        <Route path="/AlPaloDevsFront/inicio-sesion" element={<InicioSesion></InicioSesion>} />

        {/* Rutas de administrador */}
        <Route path="/AlPaloDevsFront/dashboard/juegos" element={<ProtectedRoute role="admin"><DJuegos></DJuegos></ProtectedRoute>} />
        <Route path="/AlPaloDevsFront/dashboard/juegos/:id" element={<ProtectedRoute role="admin"><DJuegosE></DJuegosE></ProtectedRoute>} />
        <Route path="/AlPaloDevsFront/dashboard/juegos/nuevo" element={<ProtectedRoute role="admin"><DJuegosC></DJuegosC></ProtectedRoute>} />

        <Route path="/AlPaloDevsFront/dashboard/muestras" element={<ProtectedRoute role="admin"><DMuestras></DMuestras></ProtectedRoute>} />
        <Route path="/AlPaloDevsFront/dashboard/muestras/:id" element={<ProtectedRoute role="admin"><DMuestrasE></DMuestrasE></ProtectedRoute>} />
        <Route path="/AlPaloDevsFront/dashboard/muestras/nuevo" element={<ProtectedRoute role="admin"><DMuestrasC></DMuestrasC></ProtectedRoute>} />

        <Route path="/AlPaloDevsFront/dashboard/franquicias" element={<ProtectedRoute role="admin"><DFranquicias></DFranquicias></ProtectedRoute>} />
        <Route path="/AlPaloDevsFront/dashboard/franquicias/:id" element={<ProtectedRoute role="admin"><DFranquiciasE></DFranquiciasE></ProtectedRoute>} />
        <Route path="/AlPaloDevsFront/dashboard/franquicias/nuevo" element={<ProtectedRoute role="admin"><DFranquiciasC></DFranquiciasC></ProtectedRoute>} />

        <Route path="/AlPaloDevsFront/dashboard/personajes" element={<ProtectedRoute role="admin"><DPersonajes></DPersonajes></ProtectedRoute>} />
        <Route path="/AlPaloDevsFront/dashboard/personajes/:id" element={<ProtectedRoute role="admin"><DPersonajesE></DPersonajesE></ProtectedRoute>} />
        <Route path="/AlPaloDevsFront/dashboard/personajes/nuevo" element={<ProtectedRoute role="admin"><DPersonajesC></DPersonajesC></ProtectedRoute>} />
      </Routes>

      <PieDePagina></PieDePagina>
    </>
  )
}

export default App
