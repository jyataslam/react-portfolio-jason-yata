import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/logo.png";

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img src={logo} alt="jason yata logo" />
            </Link>
            <div className="links-container">
                <Link className="link" to="/">
                    Work
                </Link>
                <Link className="link" to="/about">
                    About
                </Link>
                <a
                    href="https://drive.google.com/file/d/18LD3tnZteQNTme5OF5ZELs3Vo8qnEq8_/view"
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                >
                    Resumé
                </a>
            </div>
        </div>
    );
};

export default Header;
