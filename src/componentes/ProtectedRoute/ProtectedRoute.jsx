import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children, role }) {
  const { user, loading } = useAuth();

  // Mientras carga la info del usuario, no renderiza nada
  if (loading) return null;

  // Si no hay usuario
  if (!user) {
    return <Navigate to="/AlPaloDevsFront/inicio-sesion" replace />;
  }

  // Si hay restricción de rol y el usuario no la cumple
  if (role && user.rol !== role) {
    return <Navigate to="/AlPaloDevsFront/" replace />;
  }

  // Si todo va bien, renderiza el componente hijo
  return children;
}
