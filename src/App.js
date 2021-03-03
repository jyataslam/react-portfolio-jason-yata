import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./pages/home/homepage";
import AboutPage from "./pages/about/aboutpage";
import ProjectPage from "./pages/project/project";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/:projectName" component={ProjectPage} />
            </Switch>
        </div>
    );
}

export default App;
