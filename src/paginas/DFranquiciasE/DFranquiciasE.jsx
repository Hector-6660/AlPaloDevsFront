import React from "react";
import { useParams } from "react-router-dom";

function DFranquiciasE() {
    const { id } = useParams();

    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1>Panel de edición de Franquicia</h1>
            </div>
        </div>
    );
}

export default DFranquiciasE;
