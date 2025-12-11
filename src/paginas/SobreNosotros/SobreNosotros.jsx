import React from "react";
import "./SobreNosotros.css";

import Portada2 from "/src/assets/Nosotros/Portada2.png";
import Portada3 from "/src/assets/Nosotros/Portada3.png";

function SobreNosotros() {
    return (
        <>
            <div className="row">
                <div className="nosotrosItem">
                    <div className="col-10 col-sm-6 col-lg-4">
                        <img src={Portada2} alt="Portada2" />
                    </div>
                    <div className="col-10 col-sm-6 col-lg-8 descripcionNosotros">
                        <h2>¿Quiénes somos?</h2>
                        <p>Al Palo Devs nació de algo tan simple —pero tan poderoso— como un grupo de amigos unidos por una misma pasión: los videojuegos. Desde siempre hemos compartido partidas, ideas, mundos imaginarios y conversaciones interminables sobre cómo serían nuestros propios juegos algún día.</p>
                        <p>Con el tiempo, esa ilusión dejó de ser solo un sueño compartido para convertirse en un proyecto real. No somos una gran empresa ni un estudio profesional consolidado; somos un conjunto de personas que disfrutan creando, aprendiendo y dando forma a todo aquello que alguna vez imaginamos juntos.</p>
                        <p>Cada uno aporta algo distinto: creatividad, programación, diseño, historias, música… y entre todos vamos construyendo un lugar donde nuestras ideas pueden tomar vida. Lo que hacemos nace de la amistad, de la pasión y de la ilusión por seguir creciendo en algo que realmente amamos.</p>
                    </div>
                </div>

                <div className="nosotrosItem">
                    <div className="col-10 d-md-none">
                        <img src={Portada3} alt="Portada3" />
                    </div>
                    <div className="col-10 col-sm-6 col-lg-8 descripcion2Nosotros">
                        <h2>¿Qué buscamos?</h2>
                        <p>Nuestra intención con este proyecto es muy simple: dar vida a todo aquello que siempre soñamos crear. Queremos que nuestras ideas, personajes, universos y mecánicas no se queden en conversaciones o bocetos, sino que se conviertan en experiencias reales para quienes quieran disfrutarlas.</p>
                        <p>No buscamos competir con nadie; buscamos expresarnos. Crear juegos que reflejen lo que somos, lo que nos gusta y lo que nos emociona. Jugar es una forma de conectar, de sentir y de contar historias, y a través de nuestros proyectos queremos compartir parte de todo eso con otras personas.</p>
                        <p>Además, esta web es una ventana que abre nuestro pequeño mundo al resto. Aquí mostramos lo que hacemos, contamos quiénes somos y escuchamos lo que los jugadores opinan de nuestros trabajos. Cada comentario, cada crítica y cada sugerencia nos ayuda a mejorar y a avanzar juntos en este camino.</p>
                        <p>Porque, al final, <strong>nuestro objetivo es disfrutar creando y que otros puedan disfrutar jugando.</strong></p>
                    </div>
                    <div className="d-none d-md-block col-sm-6 col-lg-4">
                        <img src={Portada3} alt="Portada3" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SobreNosotros;