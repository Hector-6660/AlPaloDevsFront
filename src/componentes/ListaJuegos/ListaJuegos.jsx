import React from "react";
import useAllJuegos from "../../hooks/useAllJuegos";
import usePagination from "../../hooks/usePaginacion";
import JuegoMin from "../JuegoMin/JuegoMin";
import Paginacion from "../Paginacion/Paginacion";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import './ListaJuegos.css';

function ListaJuegos() {
    const listajuegos = useAllJuegos();
    const { currentItems, currentPage, totalPages, nextPage, prevPage, goToPage } = usePagination(listajuegos.lista, 9);

    function muestraTodosJuegos(juego) {
        return (
            <JuegoMin key={juego.id} juego={juego}></JuegoMin>
        );
    }

    return (
        <div className="container mt-4">
            {listajuegos.buscando ? (
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
                        {currentItems.map(muestraTodosJuegos)}
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

export default ListaJuegos;