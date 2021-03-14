import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/logo.png";

class Header extends React.Component {
    state = {
        isSidenavOpen: false,
    };

    sidebarClose = () => {
        this.setState({ isSidenavOpen: false }, () => {
            this.state.isSidenavOpen
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "initial");
        });
    };

    sidebarOpen = () => {
        this.setState({ isSidenavOpen: true }, () => {
            this.state.isSidenavOpen
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "initial");
        });
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
                        to="/work"
                    >
                        Work
                    </NavLink>
                    <NavLink
                        className="link"
                        activeClassName="active"
                        to="/podcast"
                    >
                        Podcast
                    </NavLink>
                    <NavLink
                        className="link"
                        activeClassName="active"
                        to="/blog"
                    >
                        Blog
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
                        className="link sidenav-logo"
                        to="/"
                        onClick={this.sidebarClose}
                    >
                        <img src={logo} alt="jason yata logo" />
                    </NavLink>
                    <div className="sidenav-links-container">
                        <NavLink
                            className="link"
                            activeClassName="active"
                            to="/work"
                            onClick={this.sidebarClose}
                        >
                            Work
                        </NavLink>
                        <NavLink
                            className="link"
                            activeClassName="active"
                            to="/podcast"
                            onClick={this.sidebarClose}
                        >
                            Podcast
                        </NavLink>
                        <NavLink
                            className="link"
                            activeClassName="active"
                            to="/blog"
                            onClick={this.sidebarClose}
                        >
                            Blog
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
                    <div className="icon-container">
                        <a href="https://open.spotify.com/show/3CLctEf29mQHmosLDDFSst?si=CaohK_0tR063v5MVqH4pjg">
                            <i className="fa fa-spotify"></i>
                        </a>
                        <a
                            href="https://github.com/jyataslam"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-github"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jasonyata/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/jasonyata/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
