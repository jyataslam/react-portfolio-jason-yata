import React from "react";
// import BLOG_DATA from "../../assets/data/blogs.data";
import BlogSingleInfo from "../../components/blog-single-info/blog-single-info";
import * as contentful from "contentful";

export default class BlogPageSingle extends React.Component {
    state = {
        data: null,
    };

    componentDidMount() {
        this.fetchBlogs();
    }

    fetchBlogs = () => {
        var client = contentful.createClient({
            space: "we4cu65w8bh3",
            accessToken: "maI3X-kEL26eP035VOPJk7oSurARPM74Wzx-RvojGZU",
        });

        client
            .getEntries({
                "fields.slug": this.props.match.params.blogName,
                content_type: "blog",
            })
            .then((entries) => {
                entries.items.forEach((entry) => {
                    this.setState({ data: entry.fields });
                    console.log(entry.fields);
                });
            });
    };

    render() {
        console.log("current blog single state", this.state.data);
        return (
            <div className="blog-single">
                {this.state.data !== null ? (
                    <BlogSingleInfo info={this.state.data} />
                ) : (
                    ""
                )}
            </div>
        );
    }
}
