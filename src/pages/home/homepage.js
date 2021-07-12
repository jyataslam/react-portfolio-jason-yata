import React from "react";
import "./homepage.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchPosts } from "../../redux/blog/blog.actions";

import ProjectItemHome from "../../components/project-item-home/project-item-home";
import Ocps from "../../assets/images/ocps/ocps-mockup-template-3.jpg";
import PocketStatz from "../../assets/images/ps/pocketstatz-featuredimage.jpg";
import Hd from "../../assets/images/hd/huntingtondigital-featured.jpg";
import Travelwell from "../../assets/images/travelwell/travel-featured-single.jpg";
import BlogCardHome from "../../components/blog-card-home/blog-card-home";
import Loader from "../../components/loader/loader";

class HomePage extends React.Component {
    state = {
        isLoaded: false,
        projects: [
            {
                title: "Orange County Plastic Surgery",
                id: 1,
                imageUrl: Ocps,
                linkUrl: "ocps",
            },
            {
                title: "Huntington Digital",
                id: 2,
                imageUrl: Hd,
                linkUrl: "huntingtondigital",
            },
            {
                title: "Pocket Statz",
                id: 4,
                imageUrl: PocketStatz,
                linkUrl: "pocketstatz",
            },
            {
                title: "TravelWell",
                id: 3,
                imageUrl: Travelwell,
                linkUrl: "travelwell",
            },
        ],
    };

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <main className="home">
                <Helmet>
                    <title>Portfolio | Jason Yata</title>
                    <meta
                        name="description"
                        content="Portfolio Website for Jason Yata"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://jasonyata.com" />
                    <meta
                        property="og:title"
                        content="Portfolio | Jason Yata"
                    />
                    <meta
                        property="og:description"
                        content="Portfolio Website for Jason Yata"
                    />
                    <meta
                        property="og:image"
                        content="https://jasonyata.com/static/media/headshot.3ca03807.jpg"
                    />
                </Helmet>
                <section className="work-section">
                    <div className="header-container">
                        <h1>Featured Work</h1>
                        <Link to="/work">view all</Link>
                    </div>
                    {this.state.projects.map(({ id, ...otherProps }) => (
                        <ProjectItemHome key={id} {...otherProps} />
                    ))}
                    <Link to="/work" className="view-work-btn">
                        All Work
                    </Link>
                </section>
                <section className="blog-section">
                    <div className="header-container">
                        <h1>Latest Blogs</h1>
                        <Link to="/blog">view all</Link>
                    </div>
                    <div className="blog-posts-container">
                        {this.props.posts !== undefined ? (
                            this.props.posts
                                .filter((items, index) => index < 3)
                                .map((item, index) => {
                                    return (
                                        <BlogCardHome
                                            key={index}
                                            {...item.fields}
                                        />
                                    );
                                })
                        ) : (
                            <Loader />
                        )}
                        {this.props.posts !== undefined ? (
                            <Link to="/blog">All Blogs</Link>
                        ) : (
                            ""
                        )}
                    </div>
                </section>
            </main>
        );
    }
}

const mapStateToProps = ({ blog }) => ({
    posts: blog.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(HomePage);
