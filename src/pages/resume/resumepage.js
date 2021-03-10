import React from "react";
import "./resumepage.scss";
import resume from "../../assets/images/resume.jpg";
import mobileResume from "../../assets/images/resume-portfolio-mobile.jpg";
import { SRLWrapper } from "simple-react-lightbox";
import { Helmet } from "react-helmet";

const ResumePage = () => {
    const options = {
        buttons: {
            showThumbnailsButton: false,
            showDownloadButton: false,
            showAutoplayButton: false,
        },
        progressBar: {
            backgroundColor: "white",
            fillColor: "#272630",
        },
        settings: {
            autoplaySpeed: 0,
        },
    };
    return (
        <SRLWrapper options={options}>
            <Helmet>
                <title>Resume | Jason Yata</title>
                <meta
                    name="description"
                    content="Jason Yata's Resumé for 2021"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://jasonyataportfolio.netlify.app/resume"
                />
                <meta property="og:title" content="Jason Yata | Portfolio" />
                <meta
                    property="og:description"
                    content="Jason Yata's Resumé for 2021"
                />
                <meta
                    property="og:image"
                    content="https://jasonyataportfolio.netlify.app/static/media/resume.775cf2e4.jpg"
                />
            </Helmet>
            <div className="resume">
                <img
                    src={resume}
                    alt="Jason Yata's Resume 2021"
                    className="full-img"
                />
                <img
                    src={mobileResume}
                    alt="Jason Yata's Resume 2021"
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
        </SRLWrapper>
    );
};

export default ResumePage;
