import React from "react";
import headshot from "../../assets/images/headshot.jpg";
import "./aboutpage.scss";

const AboutPage = () => {
    return (
        <section className="about">
            <div className="image-container">
                <img
                    src={headshot}
                    alt="jason yata web development and design headshot"
                />
            </div>
            <div className="about-container">
                <p className="location">orange county | california</p>
                <h1 className="name">Jason Yata</h1>
                <p className="title">
                    Web Developer. Software Engineer. Creative Designer.
                </p>
                <p className="bio">
                    I work as a web developer and software engineer creating
                    websites and applications for companies. I currently work
                    professionally with Javascript, React, Redux, Gatsby,
                    GraphQL, and many other technologies.
                </p>
                <p>
                    In my free time I co-host a web dev podcast
                    <a
                        href="https://open.spotify.com/show/3CLctEf29mQHmosLDDFSst?si=CaohK_0tR063v5MVqH4pjg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @badforeducation
                    </a>
                    <br></br>I also love running, traveling, and listening to
                    audiobooks.
                </p>
                <div className="icon-container">
                    <i className="fa fa-spotify"></i>
                    <i className="fa fa-linkedin"></i>
                    <i className="fa fa-instagram"></i>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
