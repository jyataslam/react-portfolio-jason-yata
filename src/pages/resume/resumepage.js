import React from "react";
import "./resumepage.scss";
import resume from "../../assets/images/resume.jpg";
import mobileResume from "../../assets/images/resume-portfolio-mobile.jpg";
import LoadingScreen from "../../components/loader/loader";

class ResumePage extends React.Component {
    state = {
        isLoaded: false,
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
                <div className="resume">
                    <img
                        src={resume}
                        alt="jason yata's resume"
                        className="full-img"
                    />
                    <img
                        src={mobileResume}
                        alt="jason yata's resume"
                        className="mobile-img"
                    />
                    <a
                        href="https://drive.google.com/file/d/18LD3tnZteQNTme5OF5ZELs3Vo8qnEq8_/view"
                        className="button"
                        target="_blank"
                        rel="noreferrer"
                        download
                    >
                        Download PDF
                    </a>
                </div>
            );
        }
    }
}

export default ResumePage;
