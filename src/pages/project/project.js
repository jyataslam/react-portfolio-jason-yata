import React, { Component, useEffect } from "react";
import "./project.scss";

class ProjectPage extends Component {
    state = {
        ocps: {
            id: 1,
            title: "Orange County Plastic Surgery",
            routeName: "ocps",
            bio:
                "lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data ",
            deliverables: [
                {
                    title: "Web Development",
                },
                {
                    title: "Web Development",
                },
                {
                    title: "Web Development",
                },
                {
                    title: "Web Development",
                },
                {
                    title: "Web Development",
                },
                {
                    title: "Web Development",
                },
                {
                    title: "Web Development",
                },
            ],
            imageOne: "image_here",
            imageTwo: "image_here",
            imageThree: "image_here",
            imageFour: "image_here",
            imageFive: "image_here",
            imageSix: "image_here",
        },
    };

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

        return (
            <div className="project">
                {title}
                {bio}
            </div>
        );
    }
}

export default ProjectPage;
