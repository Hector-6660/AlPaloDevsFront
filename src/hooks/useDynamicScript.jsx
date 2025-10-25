import { useEffect } from "react";

// Este hook se usa para cargar dinámicamente un script JS
// Recibe:
//   - src: la ruta del script a importar
//   - ready: un booleano que indica si ya tenemos todo listo para cargarlo
export default function useDynamicScript(src, ready) {
  useEffect(() => {
    // Si no hay ruta o aún no está listo, no hacemos nada
    if (!src || !ready) return;

    // Creamos una función asíncrona autoejecutable para poder usar await dentro
    (async () => {
      try {
        console.log("Importando juego desde:", src);

        // Import dinámico del script del juego.
        // El comentario /* @vite-ignore */ evita que Vite intente resolver la ruta en build time. En su lugar, se carga en tiempo real desde la URL indicada en 'src'.
        const mod = await import(/* @vite-ignore */ src);

        // Una vez importado, el script debería exportar una función initGame().
        // Si existe, la ejecutamos para iniciar el juego en el canvas.
        if (typeof mod.initGame === "function") {
          console.log("initGame encontrado, iniciando...");
          mod.initGame();
        } else {
          console.warn("No se encontró initGame");
        }
      } catch (err) {
        console.error("Error cargando script dinámico:", err);
      }
    })();
  }, [src, ready]); // Se ejecuta cada vez que cambian 'src' o 'ready'
}