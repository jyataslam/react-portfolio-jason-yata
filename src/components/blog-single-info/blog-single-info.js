import React from "react";
import "./blog-single-info.scss";

const BlogSingleInfo = ({ info }) => {
    const { content, date, featuredImg, images, title } = info;
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
                        </div>
                    </div>
                </div>
                <div className="hero-header-container">
                    {content[0] !== undefined ? <p>{content[0].text}</p> : ""}
                    {images[0] !== undefined ? (
                        <img
                            src={images[0].url}
                            alt={title}
                            className="image"
                        />
                    ) : (
                        ""
                    )}
                    {content[1] !== undefined ? <p>{content[1].text}</p> : ""}
                    {images[1] !== undefined ? (
                        <img
                            src={images[1].url}
                            alt={title}
                            className="image"
                        />
                    ) : (
                        ""
                    )}
                    {content[2] !== undefined ? <p>{content[2].text}</p> : ""}
                    {images[2] !== undefined ? (
                        <img
                            src={images[2].url}
                            alt={title}
                            className="image"
                        />
                    ) : (
                        ""
                    )}
                    {content[3] !== undefined ? <p>{content[3].text}</p> : ""}
                    {images[3] !== undefined ? (
                        <img
                            src={images[3].url}
                            alt={title}
                            className="image"
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogSingleInfo;
