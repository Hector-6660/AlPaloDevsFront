const apiUrl = "http://alpalodevs.test/api/v1";

export async function register(userData) {
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

export async function login(credenciales) {
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

export function logout() {
    localStorage.removeItem("user");
}

export async function deleteAccount(id) {
    const response = await fetch(`${apiUrl}/usuarios/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
        },
    });

    return await response.json();
}
