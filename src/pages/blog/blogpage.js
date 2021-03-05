import React from "react";
import "./blogpage.scss";
import BlogCard from "../../components/blog-card/blog-card";
import BLOG_DATA from "../../assets/data/blogs.data";

export default class BlogPage extends React.Component {
    state = {
        posts: BLOG_DATA,
    };

    render() {
        return (
            <section id="blog" className="blog site-width">
                <div className="text-container column-50-text">
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
