import React from "react";
import loadingGif from "../../assets/images/loader.gif";
import "./loader.scss";

const Loader = () => {
    return (
        <div className="loader">
            <img src={loadingGif} alt="loader" />
        </div>
    );
};

export default Loader;
