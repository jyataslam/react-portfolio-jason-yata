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
                    I am a Front End Web Developer and Software Engineer
                    currently living in Orange County, California. Since
                    graduating from the LearningFuze Web Development Bootcamp, I
                    have been building websites, designing wireframes,
                    constructing web applications, and leading dev teams for
                    over 2 years. I bring an open mind and relentless curiosity
                    to all of my projects.
                </p>
                <p>
                    Technologies I work with professionally are Javascript
                    (ES6/ES7), React, Redux, Gatsby, GraphQL, PHP, HTML, CSS,
                    SCSS, Node, Git, AWS, Netlify, Firebase, Wordpress, RESTful
                    API's, and many differently headless CMS's.
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
                    <br></br>I also love running, writing music, and traveling
                    to new places.
                </p>
                <div className="icon-container">
                    <a href="https://open.spotify.com/user/jyataslam?si=akEOmdB_Q2KNaPKIVaveBA">
                        <i className="fa fa-spotify"></i>
                    </a>
                    <a
                        href="https://github.com/jyataslam"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jasonyata/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/jasonyata/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-instagram"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
