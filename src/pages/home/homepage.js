import React from "react";
import "./homepage.scss";
import ProjectItem from "../../components/project-item/project";
import PlaceholderImg from "../../assets/images/project-placeholder.jpg";
import Ocps from "../../assets/images/ocps/ocps-featured.jpg";
import PocketStatz from "../../assets/images/ps/pocketstatz-featuredimage.jpg";
import Salisbury from "../../assets/images/salisbury/salisbury.jpg";
import Hd from "../../assets/images/hd/hd.jpg";

class HomePage extends React.Component {
    state = {
        isLoaded: false,
        projects: [
            {
                title: "Orange County Plastic Surgery",
                id: 1,
                imageUrl: Ocps,
                linkUrl: "ocps",
            },

            {
                title: "Huntington Digital",
                id: 2,
                imageUrl: Hd,
                linkUrl: "huntingtondigital",
            },
            {
                title: "Salisbury Plastic Surgery",
                id: 6,
                imageUrl: Salisbury,
                linkUrl: "salisburyps",
            },

            {
                title: "Pocket Statz",
                id: 4,
                imageUrl: PocketStatz,
                linkUrl: "pocketstatz",
            },
            {
                title: "TravelWell",
                id: 3,
                imageUrl: PlaceholderImg,
                linkUrl: "travelwell",
            },
            {
                title: "Gutierrez Chiropractic",
                id: 5,
                imageUrl: PlaceholderImg,
                linkUrl: "gutierrezchiro",
            },
        ],
    };

    render() {
        console.log(this.state.projects);
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
