export async function getUltimoJuego() {
  const apiUrl = "http://alpalodevs.test/api/v1/juegos/ultimo";

  const res = await fetch(apiUrl);
  if (!res.ok) throw new Error("Error al obtener el último juego");

  return await res.json();
}
