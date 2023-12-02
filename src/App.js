import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Github from "./sections/Github";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "../src/styles/style.css";
import "../src/styles/queries.css";

function App() {

    return (
        <React.Fragment>
            <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
            <Github/>
            <Contact/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;