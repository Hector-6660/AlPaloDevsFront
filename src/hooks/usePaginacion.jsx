import { useState } from "react";

// Hook para la paginación de una lista de elementos
function usePagination(items = [], itemsPerPage = 9) {
    // Estado para la página actual
    const [currentPage, setCurrentPage] = useState(1);

    // Cálculo del total de páginas
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Cálculo de los elementos actuales
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    // Funciones para cambiar de página
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return {
        currentItems,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        goToPage,
    };
}

export default usePagination;
