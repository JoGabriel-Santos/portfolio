import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Blog from "./pages/Blog";

import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

import "../src/styles/style.css";
import "../src/styles/queries.css";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/blog" exact component={Blog}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;