import React from "react";
import "./blogpage.scss";
import BlogCard from "../../components/blog-card/blog-card";
// import BLOG_DATA from "../../assets/data/blogs.data";
import Loader from "../../components/loader/loader";
import { Helmet } from "react-helmet";
import * as contentful from "contentful";

export default class BlogPage extends React.Component {
    state = {
        posts: [],
    };

    componentDidMount() {
        this.fetchBlogs();
    }

    fetchBlogs = () => {
        var client = contentful.createClient({
            space: "we4cu65w8bh3",
            accessToken: "maI3X-kEL26eP035VOPJk7oSurARPM74Wzx-RvojGZU",
        });

        client.getEntries().then((entries) => {
            this.setState({ posts: entries.items });
        });
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
                    {this.state.posts !== null ? (
                        this.state.posts.map((item, index) => {
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
