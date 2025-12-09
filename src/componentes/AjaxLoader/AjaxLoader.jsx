import React from "react";
import gif from '/src/assets/ajax-loader.gif';

function AjaxLoader() {
    return (
        <>
            <img src={gif} alt="Loading..." />
        </>
    );
}

export default AjaxLoader;