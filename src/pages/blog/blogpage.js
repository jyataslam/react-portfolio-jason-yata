import React from "react";
import "./blogpage.scss";
import BlogCard from "../../components/blog-card/blog-card";
import BLOG_DATA from "../../assets/data/blogs.data";
import { Helmet } from "react-helmet";

export default class BlogPage extends React.Component {
    state = {
        posts: BLOG_DATA,
    };

    render() {
        return (
            <section id="blog" className="blog site-width">
                <Helmet>
                    <title>Blog | Jason Yata</title>
                    <meta
                        name="description"
                        content="Read the latest blogs from Jason Yata"
                    />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://jasonyataportfolio.netlify.app/blog"
                    />
                    <meta property="og:title" content="Blog | Jason Yata" />
                    <meta
                        property="og:description"
                        content="Read the latest blogs from Jason Yata"
                    />
                    <meta
                        property="og:image"
                        content="https://jasonyataportfolio.netlify.app/static/media/headshot.3ca03807.jpg"
                    />
                </Helmet>
                <div
                    className="text-container column-50-text"
                    style={{ paddingTop: "0" }}
                >
                    <h1>Blog</h1>
                    <h3>Latest Posts</h3>
                </div>
                <div className="blog-posts-container">
                    {this.state.posts.map(({ id, ...otherProps }, index) => (
                        <BlogCard key={index} {...otherProps} />
                    ))}
                </div>
            </section>
        );
    }
}
