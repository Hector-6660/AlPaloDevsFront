const apiUrl = "https://alpalodevs.net/api/v1";

// Crear una nueva demo
export async function crearDemo(formData) {
  // Obtener el token de autenticación desde localStorage
  const token = localStorage.getItem("token");

  // Realizar la solicitud POST al endpoint de creación de demo
  const res = await fetch(`${apiUrl}/demos`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const text = await res.json();
    console.error("Error al crear demo:", text);
    throw new Error(text.message);
  }

  return await res.json();
}

// Actualizar demo
export async function actualizarDemo(id, formData) {
  // Obtener el token de autenticación desde localStorage
  const token = localStorage.getItem("token");

  // Realizar la solicitud POST al endpoint de actualización de demo
  formData.append("_method", "PUT");
  const res = await fetch(`${apiUrl}/demos/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const text = await res.json();
    console.error("Error al actualizar demo:", text);
    throw new Error(text.message);
  }

  return await res.json();
}

// Borrar demo
export async function borrarDemo(id) {
  // Obtener el token de autenticación desde localStorage
  const token = localStorage.getItem("token");

  // Realizar la solicitud DELETE al endpoint de eliminación de demo
  const res = await fetch(`${apiUrl}/demos/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Error al eliminar demo:", data);
    throw new Error(data.message);
  }

  return data;
}
