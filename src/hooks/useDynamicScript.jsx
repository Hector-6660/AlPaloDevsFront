import { useEffect } from "react";

export default function useDynamicScript(src, ready) {
  useEffect(() => {
    if (!src || !ready) return;
    (async () => {
      try {
        console.log("Importando juego desde:", src);
        const mod = await import(/* @vite-ignore */ src);
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
  }, [src, ready]);
}
