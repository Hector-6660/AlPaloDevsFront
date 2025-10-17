import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);

                fetch(`http://alpalodevs.test/api/v1/usuarios/${parsedUser.id}`)
                    .then(res => {
                        if (res.ok) {
                            setUser(parsedUser);
                        } else {
                            localStorage.removeItem("user");
                            setUser(null);
                        }
                    })
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

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/");
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
