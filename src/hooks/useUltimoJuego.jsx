import { useState, useEffect } from "react";
import { getUltimoJuego } from "../servicios/getUltimoJuego";


// Hook para obtener el último juego
function useUltimoJuego() {
  const [juego, setJuego] = useState(null);
  const [buscando, setBuscando] = useState(true);

  // useEffect para obtener el último juego al montar el componente
  useEffect(() => {
    getUltimoJuego()
      .then((data) => setJuego(data))
      .catch((err) => console.error(err))
      .finally(() => setBuscando(false));
  }, []);

  return { juego, buscando };
}

export default useUltimoJuego;
