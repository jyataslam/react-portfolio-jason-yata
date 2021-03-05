import React from "react";
import "./blogpage.scss";
import BlogCard from "../../components/blog-card/blog-card";
import img from "../../assets/images/project-placeholder.jpg";

export default class BlogPage extends React.Component {
    state = {
        posts: [
            {
                title: "Example Post",
                date: "March 4th, 2021",
                featuredImg: { img },
                images: [
                    {
                        url: { img },
                    },
                    {
                        url: { img },
                    },
                ],
                slug: "/example-post",
                content: [
                    {
                        text:
                            "Web Developers Andrew Ly and Jason Yata share their insight about how to break into the world of development, what to expect while attending a coding boot camp, and tips and tricks to help you understand the fundamentals of programming. They teach everything newbie coders need to know about the basics of front end development, as well as dive into what's hot in the dev community today. They also discuss a variety of curated topics and tell inspirational stories to help listeners create their own path to becoming successful not just professionally, but personally as well.",
                    },
                    {
                        text:
                            "lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data",
                    },
                ],
            },
            {
                title: "Example Post Two",
                date: "April 10th, 2021",
                featuredImg: { img },
                images: [
                    {
                        url: { img },
                    },
                    {
                        url: { img },
                    },
                ],
                slug: "/example-post",
                content: [
                    {
                        text:
                            "Web Developers Andrew Ly and Jason Yata share their insight about how to break into the world of development, what to expect while attending a coding boot camp, and tips and tricks to help you understand the fundamentals of programming. They teach everything newbie coders need to know about the basics of front end development, as well as dive into what's hot in the dev community today. They also discuss a variety of curated topics and tell inspirational stories to help listeners create their own path to becoming successful not just professionally, but personally as well.",
                    },
                    {
                        text:
                            "lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data lorem ipsum placeholder text dummy data",
                    },
                ],
            },
        ],
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
