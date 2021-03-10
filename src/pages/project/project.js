import React, { Component } from "react";
import "./project.scss";
import PROJECT_JSON from "../../assets/data/projects.json";
import { SRLWrapper } from "simple-react-lightbox";

class ProjectPage extends Component {
    state = PROJECT_JSON;

    render() {
        const name = this.props.match.params.projectName;
        const {
            title,
            bio,
            deliverables,
            website,
            featuredImage,
            images,
        } = this.state[name];
        console.log(
            "deliverables",
            deliverables.map((item, index) => console.log(item.title))
        );

        return (
            <SRLWrapper>
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
                    <img src={featuredImage} alt={title} />
                    <div className="column-50-text top-bottom-padding center">
                        <p className="technical">skills showcased</p>
                        {deliverables.map((item, index) => (
                            <p className="tech" key={index}>
                                {item.title}
                            </p>
                        ))}
                    </div>
                    {images.map((item, index) => (
                        <img src={item.image} key={index} alt={title}></img>
                    ))}
                </section>
            </SRLWrapper>
        );
    }
}

export default ProjectPage;
