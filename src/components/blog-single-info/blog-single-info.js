import React from "react";
import "./blog-single-info.scss";
import {
    TwitterShareButton,
    LinkedinShareButton,
    FacebookShareButton,
    RedditShareButton,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    RedditIcon,
} from "react-share";

const BlogSingleInfo = ({ info }) => {
    const { content, date, featuredImg, images, title } = info;
    const size = "2.5rem";
    const currentUrl = window.location.href;

    return (
        <section className="blog-single-info">
            <div className="hero">
                <div className="hero-img-container">
                    <img src={featuredImg} alt={title} />
                </div>
                <div className="overlay">
                    <div className="overlay-inner">
                        <div className="hero-header-container-inner">
                            <h1>{title}</h1>
                            <h3>{date}</h3>
                            <div className="icons-container">
                                <FacebookShareButton
                                    title={title}
                                    className="icon"
                                    url={currentUrl}
                                >
                                    <FacebookIcon
                                        size={size}
                                        round={true}
                                        bgStyle={{ fill: "transparent" }}
                                        iconFillColor={"#3b5998"}
                                    />
                                </FacebookShareButton>
                                <TwitterShareButton
                                    title={title}
                                    className="icon"
                                    url={currentUrl}
                                >
                                    <TwitterIcon
                                        size={size}
                                        round={true}
                                        bgStyle={{ fill: "transparent" }}
                                        iconFillColor={"#00aced"}
                                    />
                                </TwitterShareButton>
                                <RedditShareButton
                                    title={title}
                                    className="icon"
                                    url={currentUrl}
                                >
                                    <RedditIcon
                                        size={size}
                                        round={true}
                                        bgStyle={{ fill: "transparent" }}
                                        iconFillColor={"#ff4500"}
                                    />
                                </RedditShareButton>
                                <LinkedinShareButton
                                    title={title}
                                    className="icon"
                                    url={currentUrl}
                                >
                                    <LinkedinIcon
                                        size={size}
                                        round={true}
                                        bgStyle={{ fill: "transparent" }}
                                        iconFillColor={"#007fb1"}
                                    />
                                </LinkedinShareButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-header-container">
                    {content[0] !== undefined ? <p>{content[0].text}</p> : ""}

                    {content[1] !== undefined ? <p>{content[1].text}</p> : ""}
                    {images[0] !== undefined ? (
                        <img
                            src={images[0].url}
                            alt={title}
                            className="image"
                        />
                    ) : (
                        ""
                    )}
                    {content[2] !== undefined ? <p>{content[2].text}</p> : ""}
                    {content[3] !== undefined ? <p>{content[3].text}</p> : ""}
                    {images[1] !== undefined ? (
                        <img
                            src={images[1].url}
                            alt={title}
                            className="image"
                        />
                    ) : (
                        ""
                    )}
                    {images[2] !== undefined ? (
                        <img
                            src={images[2].url}
                            alt={title}
                            className="image"
                        />
                    ) : (
                        ""
                    )}
                    {content[4] !== undefined ? <p>{content[4].text}</p> : ""}
                    {images[3] !== undefined ? (
                        <img
                            src={images[3].url}
                            alt={title}
                            className="image"
                        />
                    ) : (
                        ""
                    )}
                    {content[5] !== undefined ? <p>{content[5].text}</p> : ""}
                </div>
            </div>
        </section>
    );
};

export default BlogSingleInfo;
