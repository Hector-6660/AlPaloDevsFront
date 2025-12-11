import React from "react";
import "./AjaxLoader.css";
import gif from '/src/assets/ajax-loader.gif';

function AjaxLoader() {
    return (
        <div className="ajax-loader-container">
            <img src={gif} alt="Loading..." className="ajax-loader" />
        </div>
    );
}

export default AjaxLoader;