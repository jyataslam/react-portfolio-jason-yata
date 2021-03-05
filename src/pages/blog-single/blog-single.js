import React from "react";
import BLOG_DATA from "../../assets/data/blogs.data";

export default class BlogPageSingle extends React.Component {
    state = {
        data: BLOG_DATA,
    };

    render() {
        const currentSlug = this.props.match.params.blogName;
        return (
            <div className="blog-single">
                {this.state.data.map((item, index) => {
                    return `/blog${item.slug}` === `/blog/${currentSlug}`
                        ? console.log("match")
                        : console.log("nah not this time buddy");
                })}
            </div>
        );
    }
}
