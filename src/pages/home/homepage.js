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
                title: "TravelWell",
                id: 3,
                imageUrl: { PlaceholderImg },
                linkUrl: "travelwell",
            },
            {
                title: "Pocket Statz",
                id: 4,
                imageUrl: { PlaceholderImg },
                linkUrl: "pocketstatz",
            },
            {
                title: "Gutierrez Chiropractic",
                id: 5,
                imageUrl: { PlaceholderImg },
                linkUrl: "gutierrezchiro",
            },
            {
                title: "Salisbury Plastic Surgery",
                id: 6,
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
