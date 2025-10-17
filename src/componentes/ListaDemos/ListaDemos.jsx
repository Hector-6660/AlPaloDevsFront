import React from "react";
import useAllDemos from "../../hooks/useAllDemos";
import DemoMin from "../DemoMin/DemoMin";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import './ListaDemos.css';

function ListaDemos(props) {
    const listademos = useAllDemos();

    function muestraTodosDemos(demo) {
        return (
            <DemoMin key={demo.id} demo={demo}></DemoMin>
        );
    }

    return (
        <div className="container mt-4">
            {listademos.buscando ? (
                <AjaxLoader />
            ) : (
                <div className="row">
                    {listademos.lista.map(muestraTodosDemos)}
                </div>
            )}
        </div>
    );
}

export default ListaDemos;