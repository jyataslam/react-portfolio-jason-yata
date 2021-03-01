import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/jason-yata-logo-min.png";

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img src={logo} alt="jason yata logo" />
            </Link>
            <div className="links-container">
                <Link className="link" to="/work">
                    Work
                </Link>
                <Link className="link" to="/about">
                    About
                </Link>
            </div>
        </div>
    );
};

export default Header;
