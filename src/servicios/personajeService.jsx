const apiUrl = "http://alpalodevs.test/api/v1";

export async function obtenerPersonajes() {
  const res = await fetch(`${apiUrl}/personajes`);
  return await res.json();
}

export async function crearPersonaje(formData) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${apiUrl}/personajes`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Error al crear personaje:", text);
    throw new Error("Error al crear el personaje");
  }

  return await res.json();
}

export async function actualizarPersonaje(id, formData) {
  const token = localStorage.getItem("token");
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
    const text = await res.text();
    console.error("Error al actualizar personaje:", text);
    throw new Error("Error al actualizar el personaje");
  }

  return await res.json();
}

export async function borrarPersonaje(id) {
  const token = localStorage.getItem("token");

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
    throw new Error(data.message || "Error al eliminar el personaje");
  }

  return data;
}

// Extra: obtener personajes por franquicia
export async function obtenerPersonajesPorFranquicia(idFranquicia) {
  const res = await fetch(`${apiUrl}/franquicias/${idFranquicia}/personajes`);
  return await res.json();
}
