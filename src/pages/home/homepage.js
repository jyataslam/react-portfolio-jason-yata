import React from "react";
import "./homepage.scss";
import ProjectItem from "../../components/project-item/project";

class HomePage extends React.Component {
    state = {
        projects: [
            {
                title: "Orange County Plastic Surgery",
                id: 1,
                linkUrl: "ocps",
            },
            {
                title: "Huntington Digital",
                id: 2,
                linkUrl: "huntingtondigital",
            },
            {
                title: "Gutierrez Chiropractic",
                id: 1,
                linkUrl: "gutierrezchiro",
            },
            {
                title: "Salisbury Plastic Surgery",
                id: 1,
                linkUrl: "salisburyps",
            },
        ],
    };

    render() {
        return (
            <div className="home">
                {this.state.projects.map(({ id, ...otherProps }) => (
                    <ProjectItem key={id} {...otherProps} />
                ))}
            </div>
        );
    }
}

export default HomePage;
