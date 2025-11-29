const apiUrl = "http://alpalodevs.test/api/v1";

// Crear una nueva franquicia
export async function crearFranquicia(formData) {
  // Obtener el token de autenticación desde localStorage
  const token = localStorage.getItem("token");

  // Realizar la solicitud POST al endpoint de creación de franquicia
  const res = await fetch(`${apiUrl}/franquicias`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const text = await res.json();
    console.error("Error al crear franquicia:", text);
    throw new Error(text.message);
  }

  return await res.json();
}

// Actualizar franquicia
export async function actualizarFranquicia(id, formData) {
  // Obtener el token de autenticación desde localStorage
  const token = localStorage.getItem("token");
  // Realizar la solicitud POST al endpoint de actualización de franquicia
  formData.append("_method", "PUT");
  const res = await fetch(`${apiUrl}/franquicias/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const text = await res.json();
    console.error("Error al actualizar franquicia:", text);
    throw new Error(text.message);
  }

  return await res.json();
}

// Borrar franquicia
export async function borrarFranquicia(id) {
  // Obtener el token de autenticación desde localStorage
  const token = localStorage.getItem("token");

  // Realizar la solicitud DELETE al endpoint de eliminación de franquicia
  const res = await fetch(`${apiUrl}/franquicias/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Error al eliminar franquicia:", data);
    throw new Error(data.message);
  }

  return data;
}
