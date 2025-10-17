const apiUrl = "http://alpalodevs.test/api/v1";

export async function crearOpinion(data) {
    const response = await fetch(`${apiUrl}/opinions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}

export async function actualizarOpinion(id, data) {
    const response = await fetch(`${apiUrl}/opinions/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}

export async function borrarOpinion(id) {
    const response = await fetch(`${apiUrl}/opinions/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
        },
    });
    return await response.json();
}

export async function obtenerOpinionUsuario(usuarioId, juegoId) {
    const response = await fetch(`${apiUrl}/opinions/buscar?usuario_id=${usuarioId}&juego_id=${juegoId}`);
    
    if (!response.ok) {
        return null;
    }

    const data = await response.json();
    return data || null;
}
