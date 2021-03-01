import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./pages/home/homepage";
import WorkPage from "./pages/work/workpage";
import AboutPage from "./pages/about/aboutpage";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/work" component={WorkPage} />
                <Route path="/about" component={AboutPage} />
            </Switch>
        </div>
    );
}

export default App;
