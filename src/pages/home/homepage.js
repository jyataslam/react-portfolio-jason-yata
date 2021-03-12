import React from "react";
import "./homepage.scss";
import { Helmet } from "react-helmet";
import ProjectItem from "../../components/project-item/project";
import Ocps from "../../assets/images/ocps/ocps-mockup-template-3.jpg";
import PocketStatz from "../../assets/images/ps/pocketstatz-featuredimage.jpg";
import Salisbury from "../../assets/images/salisbury/salisbury-mockup-template.jpg";
import Hd from "../../assets/images/hd/huntingtondigital-featured.jpg";
import Travelwell from "../../assets/images/travelwell/travel-featured-single.jpg";
import Chiro from "../../assets/images/chiro/chiro-mockup-template-ipad.jpg";

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
                title: "Gutierrez Chiropractic",
                id: 5,
                imageUrl: Chiro,
                linkUrl: "gutierrezchiro",
            },
            {
                title: "TravelWell",
                id: 3,
                imageUrl: Travelwell,
                linkUrl: "travelwell",
            },
        ],
    };

    render() {
        return (
            <div className="home">
                <Helmet>
                    <title>Jason Yata | Portfolio</title>
                    <meta
                        name="description"
                        content="Portfolio Website for Jason Yata, Development & Design"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://jasonyata.com" />
                    <meta
                        property="og:title"
                        content="Jason Yata | Portfolio"
                    />
                    <meta
                        property="og:description"
                        content="Portfolio Website for Jason Yata, Development & Design"
                    />
                    <meta
                        property="og:image"
                        content="https://jasonyata.com/static/media/headshot.3ca03807.jpg"
                    />
                </Helmet>
                {this.state.projects.map(({ id, ...otherProps }) => (
                    <ProjectItem key={id} {...otherProps} />
                ))}
            </div>
        );
    }
}

export default HomePage;
