import React, { useLayoutEffect } from "react";
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
import * as Markdown from "react-markdown";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const BlogSingleInfo = ({ info }) => {
    const { contentRegular, date, featuredImage, title } = info;
    const size = "2.5rem";
    const currentUrl = window.location.href;
    const featuredImg = featuredImage.fields.file.url;
    const formattedDate = new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    function useDarkBg() {
        useLayoutEffect(() => {
            document.body.style.backgroundColor = "#000";

            return () => {
                document.body.style.backgroundColor = "#fff";
            };
        });
    }

    useDarkBg();

    return (
        <section className="blog-single-info">
            <Helmet>
                <title>{title}</title>
                <meta
                    name="description"
                    content="It's blog time, let's read!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content={title} />
                <meta
                    property="og:description"
                    content="It's blog time, let's read!"
                />
                <meta property="og:image" content={featuredImg} />
            </Helmet>
            <div className="hero">
                <div className="hero-img-container">
                    <img src={featuredImg} alt={title} />
                </div>
                <div className="overlay">
                    <div className="overlay-inner">
                        <div className="hero-header-container-inner">
                            <h1>{title}</h1>
                            <h3>{formattedDate}</h3>
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
                    <Markdown source={contentRegular} />
                    <footer className="blog-footer">
                        <Link to="/blog">Back To Blogs</Link>
                        <div className="icons-container share-footer">
                            <h3>Share</h3>
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
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default BlogSingleInfo;
