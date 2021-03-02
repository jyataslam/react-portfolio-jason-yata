import React, { Component, useEffect } from "react";
import "./project.scss";
import PROJECT_JSON from "../../assets/data/projects.json";

class ProjectPage extends Component {
    state = PROJECT_JSON;

    render() {
        const name = this.props.match.params.projectName;
        const {
            title,
            bio,
            deliverables,
            imageOne,
            imageTwo,
            imageThree,
            imageFour,
            imageFive,
            imageSix,
        } = this.state[name];
        console.log(
            "deliverables",
            deliverables.map((item, index) => console.log(item.title))
        );

        return (
            <div className="project">
                {title}
                {bio}
            </div>
        );
    }
}

export default ProjectPage;
