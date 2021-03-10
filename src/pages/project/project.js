import React, { Component } from "react";
import "./project.scss";
import PROJECT_JSON from "../../assets/data/projects.json";
import { SRLWrapper } from "simple-react-lightbox";
import LazyLoad from "react-lazyload";

class ProjectPage extends Component {
    state = PROJECT_JSON;

    render() {
        const name = this.props.match.params.projectName;
        const options = {
            settings: {
                slideAnimationType: "both",
                slideSpringValues: [300, 50],
            },
            buttons: {
                showThumbnailsButton: false,
                showDownloadButton: false,
            },
            progressBar: {
                backgroundColor: "white",
                fillColor: "#272630",
            },
        };
        const {
            title,
            bio,
            deliverables,
            website,
            featuredImage,
            images,
        } = this.state[name];

        return (
            <SRLWrapper options={options}>
                <section className="project">
                    <div className="column-50-text">
                        <h1>{title}</h1>
                        <p className="technical">technical brief</p>
                        <p className="bio">{bio}</p>
                        <p className="visit">Visit their website at:</p>
                        <a
                            href={`//${website}`}
                            rel="noreferrer"
                            target="_blank"
                            className="website"
                        >
                            {website}
                        </a>
                    </div>
                    <LazyLoad height={400} debounce={500}>
                        <img src={featuredImage} alt={title} />
                    </LazyLoad>
                    <div className="column-50-text top-bottom-padding center">
                        <p className="technical">skills showcased</p>
                        {deliverables.map((item, index) => (
                            <p className="tech" key={index}>
                                {item.title}
                            </p>
                        ))}
                    </div>
                    <LazyLoad height={400} debounce={500}>
                        {images.map((item, index) => (
                            <img src={item.image} key={index} alt={title}></img>
                        ))}
                    </LazyLoad>
                </section>
            </SRLWrapper>
        );
    }
}

export default ProjectPage;
