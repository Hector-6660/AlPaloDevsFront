const apiUrl = "http://alpalodevs.test/api/v1";

export async function crearJuego(formData) {
  const token = localStorage.getItem("token");

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

export async function actualizarJuego(id, formData) {
  formData.append("_method", "PUT");

  const token = localStorage.getItem("token");

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

export async function borrarJuego(id) {
  const token = localStorage.getItem("token");

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
