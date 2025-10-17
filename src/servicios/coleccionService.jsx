const apiUrl = "http://alpalodevs.test/api/v1";

export async function crearColeccion(data) {
    const response = await fetch(`${apiUrl}/coleccions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Error al crear la colección");
    }

    return await response.json();
}

export async function actualizarColeccion(id, formData) {
    formData.append("_method", "PUT");
    const response = await fetch(`${apiUrl}/coleccions/${id}`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Error al actualizar la colección");
    }

    return await response.json();
}

export async function borrarColeccion(id) {
    const response = await fetch(`${apiUrl}/coleccions/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Error al borrar la colección");
    }

    return await response.json();
}

export async function agregarJuegoAColeccion(coleccionId, juegoId) {
    const response = await fetch(`${apiUrl}/coleccions/${coleccionId}/juegos/${juegoId}`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Error al añadir juego a la colección");
    }

    return await response.json();
}

export async function quitarJuegoDeColeccion(coleccionId, juegoId) {
    const response = await fetch(`${apiUrl}/coleccions/${coleccionId}/juegos/${juegoId}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Error al quitar el juego de la colección");
    }

    return await response.json();
}
