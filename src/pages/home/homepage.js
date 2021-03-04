import React from "react";
import "./homepage.scss";
import ProjectItem from "../../components/project-item/project";
import PlaceholderImg from "../../assets/images/project-placeholder.jpg";
import LoadingScreen from "../../components/loader/loader";

class HomePage extends React.Component {
    state = {
        isLoaded: false,
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

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 300);
    }

    render() {
        const { isLoaded } = this.state;

        if (!isLoaded) {
            return <LoadingScreen />;
        } else {
            return (
                <div className="home">
                    {this.state.projects.map(({ id, ...otherProps }) => (
                        <ProjectItem key={id} {...otherProps} />
                    ))}
                </div>
            );
        }
    }
}

export default HomePage;
