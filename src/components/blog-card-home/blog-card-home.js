import React from "react";
import "./blog-card-home.scss";
import { withRouter } from "react-router-dom";

const BlogCard = ({
    title,
    slug,
    match: { url },
    featuredImage,
    date,
    contentRegular,
    history,
}) => {
    const featuredImg = featuredImage.fields.file.url;
    const MAX_LENGTH = 100;
    const formattedDate = new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (
        <div className="blog-card-home">
            <div
                className="image-container"
                onClick={() => history.push(`${url}blog/${slug}`)}
                style={{ backgroundImage: `url(${featuredImg})` }}
            ></div>
            <div className="text-container">
                <h1
                    onClick={() => history.push(`${url}blog/${slug}`)}
                    className="title"
                >
                    {title}
                </h1>
                <h3>{formattedDate}</h3>
                <p>{`${contentRegular.substring(0, MAX_LENGTH)}...`}</p>
                <p
                    className="button"
                    onClick={() => history.push(`${url}blog/${slug}`)}
                >
                    Read More
                </p>
            </div>
        </div>
    );
};

export default withRouter(BlogCard);
