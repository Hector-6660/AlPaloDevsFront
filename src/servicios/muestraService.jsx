const apiUrl = "http://alpalodevs.test/api/v1";

export async function crearDemo(formData) {
  const token = localStorage.getItem("token");

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

export async function actualizarDemo(id, formData) {
  const token = localStorage.getItem("token");
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

export async function borrarDemo(id) {
  const token = localStorage.getItem("token");

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
