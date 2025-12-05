import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// Componente proveedor de autenticación
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Verificar si el usuario ya está autenticado al cargar el componente
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        // Si hay un usuario almacenado
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);

                // Verificar si el usuario sigue siendo válido
                fetch(`https://alpalodevs.net/api/v1/usuarios/${parsedUser.id}`)
                    .then(res => {
                        if (res.ok) {
                            setUser(parsedUser);
                        } else {
                            localStorage.removeItem("user");
                            setUser(null);
                        }
                    })
                    // Si hay un error en la solicitud, eliminar el usuario almacenado
                    .catch(() => {
                        localStorage.removeItem("user");
                        setUser(null);
                    })
                    .finally(() => setLoading(false));
            } catch (e) {
                localStorage.removeItem("user");
                setUser(null);
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }, []);

    // Funciones de login y logout
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/AlPaloDevsFront/");
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/AlPaloDevsFront/");
    };

    // Proveer el contexto de autenticación a los componentes hijos
    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

// Hook personalizado para usar el contexto de autenticación
export function useAuth() {
    return useContext(AuthContext);
}
