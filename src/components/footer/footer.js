import React from "react";
import "./footer.scss";

const Footer = () => {
    return (
        <section className="footer">
            <div className="half">
                <h1>General Inquiries</h1>
                <a href="tel:+17143532851" className="underline">
                    (714) 353-2851
                </a>
                <a href="mailto:jasonyata@gmail.com" className="underline">
                    jasonyata@gmail.com
                </a>
            </div>
            <div className="half">
                <h1>Social Media</h1>
                <div className="icon-container">
                    <a href="https://open.spotify.com/show/3CLctEf29mQHmosLDDFSst?si=CaohK_0tR063v5MVqH4pjg">
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

export default Footer;
