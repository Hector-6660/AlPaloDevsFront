import React from "react";
import useAllDemos from "../../hooks/useAllDemos";
import usePagination from "../../hooks/usePaginacion";
import DemoMin from "../DemoMin/DemoMin";
import Paginacion from "../Paginacion/Paginacion";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import './ListaDemos.css';

function ListaDemos(props) {
    const listademos = useAllDemos();
    const { currentItems, currentPage, totalPages, nextPage, prevPage, goToPage } = usePagination(listademos.lista, 9);


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
                <>
                    <Paginacion
                        currentPage={currentPage}
                        totalPages={totalPages}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        goToPage={goToPage}
                    />
                    <div className="row">
                        {currentItems.map(muestraTodosDemos)}
                    </div>
                    <Paginacion
                        currentPage={currentPage}
                        totalPages={totalPages}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        goToPage={goToPage}
                    />
                </>
            )}
        </div>
    );
}

export default ListaDemos;