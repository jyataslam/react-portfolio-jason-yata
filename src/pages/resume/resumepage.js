import React from "react";
import "./resumepage.scss";
import resume from "../../assets/images/resume_2021-min.jpg";
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
                    content="https://jasonyata.com/resume"
                />
                <meta property="og:title" content="Jason Yata | Portfolio" />
                <meta
                    property="og:description"
                    content="Jason Yata's Resumé for 2021"
                />
                <meta
                    property="og:image"
                    content="https://jasonyata.com/static/media/resume.775cf2e4.jpg"
                />
            </Helmet>
            <div className="resume">
                <img
                    src={resume}
                    alt="Jason Yata's Resume 2021"
                    className="full-img"
                />
                <a
                    href="https://www.canva.com/design/DAD9NDq7G3Q/QoeCgJBHBQH03uOLyiSmDw/view?utm_content=DAD9NDq7G3Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                    className="button"
                    target="_blank"
                    rel="noreferrer"
                    download
                >
                    VIEW PDF
                </a>
            </div>
        </SRLWrapper>
    );
};

export default ResumePage;
