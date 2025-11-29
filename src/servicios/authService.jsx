const apiUrl = "http://alpalodevs.test/api/v1";

// Registro de usuario
export async function register(userData) {
    // Realizar la solicitud POST al endpoint de registro
    const response = await fetch(`${apiUrl}/usuarios`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        console.error("Error en el registro:", data);
        throw new Error(data.message || "Error al registrar usuario");
    }

    if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.usuario));
    }

    return data;
}

// Inicio de sesión
export async function login(credenciales) {
    // Realizar la solicitud POST al endpoint de inicio de sesión
    const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
        body: JSON.stringify(credenciales),
    });

    const data = await response.json();

    if (!response.ok) {
        console.error("Error en el inicio de sesión:", data);
        throw new Error(data.message || "Error al iniciar sesión");
    }

    localStorage.setItem("token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.usuario));

    return data.usuario;
}

// Cierre de sesión
export function logout() {
    // Eliminar los datos del usuario y el token de localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
}

// Eliminar cuenta de usuario
export async function deleteAccount(id) {
    // Realizar la solicitud DELETE al endpoint de eliminación de usuario
    const response = await fetch(`${apiUrl}/usuarios/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
        },
    });

    return await response.json();
}
