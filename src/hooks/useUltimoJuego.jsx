import { useState, useEffect } from "react";
import { getUltimoJuego } from "../servicios/getUltimoJuego";

function useUltimoJuego() {
  const [juego, setJuego] = useState(null);
  const [buscando, setBuscando] = useState(true);

  useEffect(() => {
    getUltimoJuego()
      .then((data) => setJuego(data))
      .catch((err) => console.error(err))
      .finally(() => setBuscando(false));
  }, []);

  return { juego, buscando };
}

export default useUltimoJuego;
