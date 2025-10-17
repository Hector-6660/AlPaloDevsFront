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
        <Route path="/" element={<Inicio></Inicio>} />
        <Route path="/juegos" element={<Juegos></Juegos>} />
        <Route path="/juego/:id" element={<Juego></Juego>} />
        <Route path="/muestras" element={<Muestras></Muestras>} />
        <Route path="/muestra/:id" element={<Muestra></Muestra>} />
        <Route path="/contacto" element={<Contacto></Contacto>} />
        <Route path="/nosotros" element={<Nosotros></Nosotros>} />
        <Route path="/perfil" element={<Perfil></Perfil>} />
        <Route path="/editar-perfil" element={<EditarPerfil></EditarPerfil>} />
        <Route path="/franquicia/:id" element={<Franquicia></Franquicia>} />
        <Route path="/coleccion/:id" element={<Coleccion></Coleccion>} />
        <Route path="/crear-coleccion" element={<CrearColeccion></CrearColeccion>} />
        <Route path="/editar-coleccion/:id" element={<EditarColeccion></EditarColeccion>} />
        <Route path="/registro" element={<Registro></Registro>} />
        <Route path="/inicio-sesion" element={<InicioSesion></InicioSesion>} />

        {/* Rutas de administrador */}
        <Route path="/dashboard/juegos" element={<ProtectedRoute role="admin"><DJuegos></DJuegos></ProtectedRoute>} />
        <Route path="/dashboard/juegos/:id" element={<ProtectedRoute role="admin"><DJuegosE></DJuegosE></ProtectedRoute>} />
        <Route path="/dashboard/juegos/nuevo" element={<ProtectedRoute role="admin"><DJuegosC></DJuegosC></ProtectedRoute>} />

        <Route path="/dashboard/muestras" element={<ProtectedRoute role="admin"><Inicio></Inicio></ProtectedRoute>} />
        <Route path="/dashboard/muestras/:id" element={<ProtectedRoute role="admin"><Inicio></Inicio></ProtectedRoute>} />
        <Route path="/dashboard/muestras/nuevo" element={<ProtectedRoute role="admin"><Inicio></Inicio></ProtectedRoute>} />

        <Route path="/dashboard/franquicias" element={<ProtectedRoute role="admin"><DFranquicias></DFranquicias></ProtectedRoute>} />
        <Route path="/dashboard/franquicias/:id" element={<ProtectedRoute role="admin"><DFranquiciasE></DFranquiciasE></ProtectedRoute>} />
        <Route path="/dashboard/franquicias/nuevo" element={<ProtectedRoute role="admin"><DFranquiciasC></DFranquiciasC></ProtectedRoute>} />

        <Route path="/dashboard/personajes" element={<ProtectedRoute role="admin"><Inicio></Inicio></ProtectedRoute>} />
        <Route path="/dashboard/personajes/:id" element={<ProtectedRoute role="admin"><Inicio></Inicio></ProtectedRoute>} />
        <Route path="/dashboard/personajes/nuevo" element={<ProtectedRoute role="admin"><Inicio></Inicio></ProtectedRoute>} />
      </Routes>

      <PieDePagina></PieDePagina>
    </>
  )
}

export default App
