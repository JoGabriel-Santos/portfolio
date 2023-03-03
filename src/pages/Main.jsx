import React from "react";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Github from "../sections/Github";
import Contact from "../sections/Contact";

function Main() {

    return (
        <React.Fragment>
            <Hero/>
            <About/>
            <Projects/>
            <Github/>
            <Contact/>
        </React.Fragment>
    );
}

export default Main;