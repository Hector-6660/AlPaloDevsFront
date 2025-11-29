const apiUrl = "http://alpalodevs.test/api/v1";

// Crear una nueva opinión
export async function crearOpinion(data) {
    // Obtener el token de autenticación desde localStorage
    const token = localStorage.getItem("token");

    // Realizar la solicitud POST al endpoint de creación de opinión
    const response = await fetch(`${apiUrl}/opinions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}

// Actualizar opinión
export async function actualizarOpinion(id, data) {
    // Obtener el token de autenticación desde localStorage
    const token = localStorage.getItem("token");

    // Realizar la solicitud PUT al endpoint de actualización de opinión
    const response = await fetch(`${apiUrl}/opinions/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}

// Borrar opinión
export async function borrarOpinion(id) {
    // Obtener el token de autenticación desde localStorage
    const token = localStorage.getItem("token");

    // Realizar la solicitud DELETE al endpoint de eliminación de opinión
    const response = await fetch(`${apiUrl}/opinions/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    return await response.json();
}

// Obtener opinión de un usuario para un juego específico
export async function obtenerOpinionUsuario(usuarioId, juegoId) {
    // Realizar la solicitud GET al endpoint de obtención de opinión
    const response = await fetch(`${apiUrl}/opinions/buscar?usuario_id=${usuarioId}&juego_id=${juegoId}`);
    
    if (!response.ok) {
        return null;
    }

    const data = await response.json();
    return data || null;
}
