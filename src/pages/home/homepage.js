import React from "react";
import "./homepage.scss";
import ProjectItem from "../../components/project-item/project";
import PlaceholderImg from "../../assets/images/project-placeholder.jpg";

class HomePage extends React.Component {
    state = {
        projects: [
            {
                title: "Orange County Plastic Surgery",
                id: 1,
                imageUrl: { PlaceholderImg },
                linkUrl: "ocps",
            },
            {
                title: "Huntington Digital",
                id: 2,
                imageUrl: { PlaceholderImg },
                linkUrl: "huntingtondigital",
            },
            {
                title: "Gutierrez Chiropractic",
                id: 3,
                imageUrl: { PlaceholderImg },
                linkUrl: "gutierrezchiro",
            },
            {
                title: "Salisbury Plastic Surgery",
                id: 4,
                imageUrl: { PlaceholderImg },
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
