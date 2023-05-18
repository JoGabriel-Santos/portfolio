import React from "react";

import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Github from "../sections/Github";
import Contact from "../sections/Contact";

function Home() {

    return (
        <React.Fragment>
            <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
            <Github/>
            <Contact/>
        </React.Fragment>
    )
}

export default Home;