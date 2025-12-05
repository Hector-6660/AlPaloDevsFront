const apiUrl = "https://alpalodevs.net/api/v1";

// Crear un nuevo juego
export async function crearJuego(formData) {
  // Obtener el token de autenticación desde localStorage
  const token = localStorage.getItem("token");

  // Realizar la solicitud POST al endpoint de creación de juego
  const res = await fetch(`${apiUrl}/juegos`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const text = await res.json();
    console.error("Error al crear personaje:", text);
    throw new Error(text.message);
  }

  return await res.json();
}

// Actualizar juego
export async function actualizarJuego(id, formData) {
  // Obtener el token de autenticación desde localStorage
  const token = localStorage.getItem("token");

  // Realizar la solicitud POST al endpoint de actualización de juego
  formData.append("_method", "PUT");
  const res = await fetch(`${apiUrl}/juegos/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const text = await res.json();
    console.error("Respuesta del servidor:", text);
    throw new Error(text.message);
  }

  return await res.json();
}

// Borrar juego
export async function borrarJuego(id) {
  // Obtener el token de autenticación desde localStorage
  const token = localStorage.getItem("token");

  // Realizar la solicitud DELETE al endpoint de eliminación de juego
  const res = await fetch(`${apiUrl}/juegos/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Error al eliminar juego:", data);
    throw new Error(data.message);
  }

  return data;
}
