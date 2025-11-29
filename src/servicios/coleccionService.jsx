const apiUrl = "http://alpalodevs.test/api/v1";

// Crear una nueva colección
export async function crearColeccion(data) {
    // Realizar la solicitud POST al endpoint de creación de colección
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

// Actualizar colección
export async function actualizarColeccion(id, formData) {
    // Realizar la solicitud POST al endpoint de actualización de colección
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

// Borrar colección
export async function borrarColeccion(id) {
    // Realizar la solicitud DELETE al endpoint de eliminación de colección
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

// Añadir juego a colección
export async function agregarJuegoAColeccion(coleccionId, juegoId) {
    // Realizar la solicitud POST al endpoint de añadir juego a colección
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

// Quitar juego de colección
export async function quitarJuegoDeColeccion(coleccionId, juegoId) {
    // Realizar la solicitud DELETE al endpoint de quitar juego de colección
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
