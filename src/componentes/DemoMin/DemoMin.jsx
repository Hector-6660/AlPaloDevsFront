import React from "react";
import { Link } from "react-router-dom";
import './DemoMin.css';

function DemoMin(props) {
    return (
        <div className="col-6 col-md-4 demoMinMargen">
            <div className="demoMin">
                <Link to={`/AlPaloDevsFront/muestra/${props.demo.id}`} value={props.demo.id}>
                    <img src={props.demo.imagen} className="imagenDemoMin"></img>
                    <h3>{props.demo.nombre}</h3>
                </Link>
            </div>
        </div>
    );
}

export default DemoMin;