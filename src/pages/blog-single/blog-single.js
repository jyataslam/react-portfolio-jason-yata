import React from "react";
import BLOG_DATA from "../../assets/data/blogs.data";
import BlogSingleInfo from "../../components/blog-single-info/blog-single-info";

export default class BlogPageSingle extends React.Component {
    state = {
        data: BLOG_DATA,
    };

    render() {
        const currentSlug = this.props.match.params.blogName;
        return (
            <div className="blog-single">
                {this.state.data.map((item, index) => {
                    return `/blog${item.slug}` === `/blog/${currentSlug}` ? (
                        <BlogSingleInfo info={item} key={index} />
                    ) : (
                        ""
                    );
                })}
            </div>
        );
    }
}
