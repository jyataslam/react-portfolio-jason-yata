import React from "react";
import "./resumepage.scss";
import resume from "../../assets/images/resume.jpg";
import mobileResume from "../../assets/images/resume-portfolio-mobile.jpg";

const ResumePage = () => {
    return (
        <div className="resume">
            <img src={resume} alt="jason yata's resume" className="full-img" />
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
};

export default ResumePage;
