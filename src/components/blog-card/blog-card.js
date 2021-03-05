import React from "react";
import "./blog-card.scss";
import { withRouter } from "react-router-dom";

const BlogCard = ({
    title,
    date,
    featuredImg,
    slug,
    content,
    history,
    match,
}) => {
    const MAX_LENGTH = 300;
    const featuredImage = featuredImg.img;
    return (
        <div className="blog-card">
            <div
                className="image-container"
                onClick={() => history.push(`${match.url}${slug}`)}
                style={{ backgroundImage: `url(${featuredImage})` }}
            ></div>
            <div className="text-container">
                <h1 onClick={() => history.push(`${match.url}${slug}`)}>
                    {title}
                </h1>
                <h3>{date}</h3>

                {content[0].text.length > MAX_LENGTH ? (
                    <p>{`${content[0].text.substring(0, MAX_LENGTH)}...`}</p>
                ) : (
                    <p>content[0].text</p>
                )}
                <p
                    className="button"
                    onClick={() => history.push(`${match.url}${slug}`)}
                >
                    Read More
                </p>
            </div>
        </div>
    );
};

export default withRouter(BlogCard);
