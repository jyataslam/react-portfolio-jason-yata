import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/logo.png";

class Header extends React.Component {
    state = {
        isSidenavOpen: false,
    };

    sidebarClose = () => {
        this.setState({ isSidenavOpen: false });
    };

    sidebarOpen = () => {
        this.setState({ isSidenavOpen: true });
    };

    render() {
        const { isSidenavOpen } = this.state;
        return (
            <div className="header">
                <Link className="logo-container" to="/">
                    <img src={logo} alt="jason yata logo" />
                </Link>
                <div className="links-container">
                    <NavLink
                        className="link"
                        activeClassName="active"
                        exact
                        to="/"
                    >
                        Work
                    </NavLink>
                    <NavLink
                        className="link"
                        activeClassName="active"
                        to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink
                        className="link"
                        activeClassName="active"
                        to="/resume"
                    >
                        Resumé
                    </NavLink>
                    <i
                        className="fa fa-bars open-btn"
                        onClick={this.sidebarOpen}
                    ></i>
                </div>
                <div
                    className={
                        isSidenavOpen ? "sidenav-open sidenav" : "sidenav"
                    }
                    ref={this.sidebar}
                    id="sidebar"
                >
                    <i
                        className="fa fa-close close-btn"
                        onClick={this.sidebarClose}
                    ></i>
                    <NavLink
                        className="link"
                        activeClassName="active"
                        exact
                        to="/"
                        onClick={this.sidebarClose}
                    >
                        Work
                    </NavLink>
                    <NavLink
                        className="link"
                        activeClassName="active"
                        to="/about"
                        onClick={this.sidebarClose}
                    >
                        About
                    </NavLink>
                    <NavLink
                        className="link"
                        activeClassName="active"
                        to="/resume"
                        onClick={this.sidebarClose}
                    >
                        Resumé
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Header;
