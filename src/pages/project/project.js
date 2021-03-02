import React, { Component } from "react";
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
            website,
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
            <section className="project">
                <div className="column-50-text">
                    <h1>{title}</h1>
                    <p className="technical">technical brief</p>
                    <p className="bio">{bio}</p>
                    <p className="website">{website}</p>
                </div>
                <img src={imageOne} alt={title} />
                <div className="column-50-text top-bottom-padding center">
                    <p className="technical">skills showcased</p>
                    {deliverables.map((item, index) => (
                        <p className="tech" key={index}>
                            {item.title}
                        </p>
                    ))}
                </div>
                <img src={imageTwo} alt={title} />
                <img src={imageThree} alt={title} />
                <img src={imageFour} alt={title} />
                <img src={imageFive} alt={title} />
                <img src={imageSix} alt={title} />
            </section>
        );
    }
}

export default ProjectPage;
