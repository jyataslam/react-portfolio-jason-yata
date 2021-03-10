import React from "react";
import "./podcastpage.scss";
import logo from "../../assets/images/logo-bfe.png";
import { Helmet } from "react-helmet";

class PodcastPage extends React.Component {
    componentDidMount() {
        this.createBuzzsproutPlayer();
    }

    createBuzzsproutPlayer() {
        const script = document.createElement("script");
        script.src =
            "https://www.buzzsprout.com/1318378.js?container_id=buzzsprout-large-player-1318378&player=large";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
            <section className="podcast site-width">
                <Helmet>
                    <title>Podcast | Jason Yata</title>
                    <meta
                        name="description"
                        content="Listen to the Bad For Education Podcast by Jason Yata & Andrew Ly"
                    />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://jasonyataportfolio.netlify.app/blog"
                    />
                    <meta property="og:title" content="Podcast | Jason Yata" />
                    <meta
                        property="og:description"
                        content="Listen to the Bad For Education Podcast by Jason Yata & Andrew Ly"
                    />
                    <meta
                        property="og:image"
                        content="https://jasonyataportfolio.netlify.app/static/media/logo-bfe.eb2c742c.png"
                    />
                </Helmet>
                <img
                    src={logo}
                    alt="bad for education podcast logo"
                    className="logo"
                />
                <div className="text-container column-50-text">
                    <h3>Coding Bits & Bytes For The Modern Developer</h3>
                    <p>
                        Web Developers Andrew Ly and Jason Yata share their
                        insight about how to break into the world of
                        development, what to expect while attending a coding
                        boot camp, and tips and tricks to help you understand
                        the fundamentals of programming. They teach everything
                        newbie coders need to know about the basics of front end
                        development, as well as dive into what's hot in the dev
                        community today. They also discuss a variety of curated
                        topics and tell inspirational stories to help listeners
                        create their own path to becoming successful not just
                        professionally, but personally as well.
                    </p>
                    <p>
                        New episodes every Monday and Thursday.
                        <br></br>Listen on Spotify, Apple Podcasts, Stitcher,
                        and many more.
                    </p>
                    <div className="icon-container">
                        <a href="https://open.spotify.com/show/3CLctEf29mQHmosLDDFSst?si=CaohK_0tR063v5MVqH4pjg">
                            <i className="fa fa-spotify"></i>
                        </a>
                        <a
                            href="https://podcasts.apple.com/us/podcast/bad-for-education-coding-tips-for-junior-developer/id1530069766"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-apple"></i>
                        </a>
                        <a
                            href="https://www.twitter.com/badforedupod"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/badforeducationpodcast/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="podcast-player-container">
                    <div id="buzzsprout-large-player-1318378"></div>
                </div>
            </section>
        );
    }
}

export default PodcastPage;
