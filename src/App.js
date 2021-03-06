import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import HomePage from "./pages/home/homepage";
import AboutPage from "./pages/about/aboutpage";
import ProjectPage from "./pages/project/project";
import ResumePage from "./pages/resume/resumepage";
import PodcastPage from "./pages/podcast/podcastpage";
import BlogPage from "./pages/blog/blogpage";
import BlogSinglePage from "./pages/blog-single/blog-single";
import WorkPage from "./pages/work/workpage";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/work/:projectName" component={ProjectPage} />
                    <Route path="/work" component={WorkPage} />
                    <Route path="/resume" component={ResumePage} />
                    <Route path="/podcast" component={PodcastPage} />
                    <Route path="/blog/:blogName" component={BlogSinglePage} />
                    <Route path="/blog" component={BlogPage} />
                    <Route path="/:projectName" component={ProjectPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
