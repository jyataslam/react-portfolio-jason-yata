import React from "react";
import "./project.scss";
import { withRouter } from "react-router-dom";

const Project = ({ title, linkUrl, history, match }) => {
    return (
        <div
            className="project-item"
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className="invisible-content">
                <h1 className="title">{title.toUpperCase()}</h1>
            </div>
        </div>
    );
};

export default withRouter(Project);
