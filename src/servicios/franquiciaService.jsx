const apiUrl = "http://alpalodevs.test/api/v1";

export async function crearFranquicia(formData) {
  const token = localStorage.getItem("token");

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

export async function actualizarFranquicia(id, formData) {
  const token = localStorage.getItem("token");
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

export async function borrarFranquicia(id) {
  const token = localStorage.getItem("token");

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
