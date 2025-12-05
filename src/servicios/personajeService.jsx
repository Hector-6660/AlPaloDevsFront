const apiUrl = "https://alpalodevs.net/api/v1";

// Crear un nuevo personaje
export async function crearPersonaje(formData) {
  // Obtener el token de autenticación desde localStorage
  const token = localStorage.getItem("token");

  // Realizar la solicitud POST al endpoint de creación de personaje
  const res = await fetch(`${apiUrl}/personajes`, {
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

// Actualizar personaje
export async function actualizarPersonaje(id, formData) {
  // Obtener el token de autenticación desde localStorage
  const token = localStorage.getItem("token");

  // Realizar la solicitud POST al endpoint de actualización de personaje
  formData.append("_method", "PUT");
  const res = await fetch(`${apiUrl}/personajes/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const text = await res.json();
    console.error("Error al actualizar personaje:", text);
    throw new Error(text.message);
  }

  return await res.json();
}

// Borrar personaje
export async function borrarPersonaje(id) {
  // Obtener el token de autenticación desde localStorage
  const token = localStorage.getItem("token");

  // Realizar la solicitud DELETE al endpoint de eliminación de personaje
  const res = await fetch(`${apiUrl}/personajes/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Error al eliminar personaje:", data);
    throw new Error(data.message);
  }

  return data;
}
