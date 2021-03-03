import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/logo.png";

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img src={logo} alt="jason yata logo" />
            </Link>
            <div className="links-container">
                <NavLink className="link" activeClassName="active" exact to="/">
                    Work
                </NavLink>
                <NavLink className="link" activeClassName="active" to="/about">
                    About
                </NavLink>
                <NavLink className="link" activeClassName="active" to="/resume">
                    Resumé
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
