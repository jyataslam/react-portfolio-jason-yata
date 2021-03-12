import React from "react";
import "./project-item-home.scss";
import { withRouter } from "react-router-dom";

const Project = ({ title, imageUrl, linkUrl, history, match }) => {
    const img = imageUrl;
    return (
        <div
            className="project-item"
            onClick={() => history.push(`${match.url}work/${linkUrl}`)}
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <div className="invisible-content">
                <h1 className="title">{title.toUpperCase()}</h1>
            </div>
        </div>
    );
};

export default withRouter(Project);
