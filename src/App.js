import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Footer from "./sections/Footer";

import "../src/styles/style.css";
import "../src/styles/queries.css";

function App() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </React.Fragment>
    );
}

export default App;