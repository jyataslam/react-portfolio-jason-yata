import React, { Component } from "react";
import "./blogpage.scss";

import { connect } from "react-redux";
import { fetchPosts } from "../../redux/blog/blog.actions";

import BlogCard from "../../components/blog-card/blog-card";
import Loader from "../../components/loader/loader";
import { Helmet } from "react-helmet";

class BlogPage extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

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
                        content="https://jasonyata.com/blog"
                    />
                    <meta property="og:title" content="Blog | Jason Yata" />
                    <meta
                        property="og:description"
                        content="Read the latest blogs from Jason Yata"
                    />
                    <meta
                        property="og:image"
                        content="https://jasonyata.com/static/media/headshot.3ca03807.jpg"
                    />
                </Helmet>
                <div
                    className="text-container column-50-text"
                    style={{ paddingTop: "0" }}
                >
                    <h1 className="title">Blog</h1>
                    <h3>Latest Posts</h3>
                </div>
                <div className="blog-posts-container">
                    {this.props.posts !== undefined ? (
                        this.props.posts.map((item, index) => {
                            return <BlogCard key={index} {...item.fields} />;
                        })
                    ) : (
                        <Loader />
                    )}
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({ blog }) => ({
    posts: blog.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(BlogPage);
