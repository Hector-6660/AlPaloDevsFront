import React from "react";
import "./Paginacion.css";

function Paginacion({ currentPage, totalPages, nextPage, prevPage, goToPage }) {
    if (totalPages <= 1) return null;

    return (
        <div className="paginacion">
            <button onClick={prevPage} disabled={currentPage === 1}>
                {"<"} Anterior
            </button>

            <div className="paginas">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        className={currentPage === i + 1 ? "activa" : ""}
                        onClick={() => goToPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            <button onClick={nextPage} disabled={currentPage === totalPages}>
                Siguiente {">"}
            </button>
        </div>
    );
}

export default Paginacion;
