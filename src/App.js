import React from 'react';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Github from './sections/Github';
import Contact from './sections/Contact';

import '../src/styles/style.css';

function App() {
    return (
        <div className={'main-content'}>
            <Navbar/>

            <main>
                <Hero/>
                <About/>
                <Projects/>
                <Github/>
                <Contact/>
            </main>
        </div>
    );
}

export default App;
