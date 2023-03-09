import React, { useState } from "react";

import VisibilitySensor from 'react-visibility-sensor';

function About() {

    const [isVisible, setIsVisible] = useState(false);

    const onAnimationEnd = () => {
        setIsVisible(true);
    };

    return (
        <VisibilitySensor partialVisibility={0.8} onChange={setIsVisible}>
            <section
                className={`section-about ${isVisible ? "section-animation" : "opacity-0"}`}
                onAnimationEnd={onAnimationEnd} id="about">

                <div className="container center-text">
                    <span className="subheading">
                        About me
                    </span>

                    <h2 className="heading-secondary">
                        Here you will find more information about me
                    </h2>
                </div>

                <div className="container grid grid-about grid--2-cols grid--center-v">
                    <div className="about-description">

                        <p className="about-description-text">
                            I'm a <b>Full Stack Web Developer</b> who constantly seeks out
                            work opportunities where I can contribute, learn and grow.
                        </p>

                        <p className="about-description-text">
                            My interest in development started in 2016 when I decided to join
                            the Computer Technician course, and now I am graduating in <b>Computer Science</b>.
                        </p>

                        <p className="about-description-text">
                            I'm currently learning <b>ReactJs</b>, developing real world projects.
                            Check out some of my work in the <a href="#projects"><b>Projects</b></a> section.
                        </p>
                    </div>

                    <div className="about-skills grid grid--4-cols">
                        <div className="skill">
                            <img src={require('../util/icons/icons8-javascript-96.png')} alt=""/>
                            <p className="skill-name">JavaScript</p>
                        </div>

                        <div className="skill">
                            <img src={require('../util/icons/icons8-typescript-96.png')} alt=""/>
                            <p className="skill-name">TypeScript</p>
                        </div>

                        <div className="skill">
                            <img src={require('../util/icons/icons8-java-96.png')} alt=""/>
                            <p className="skill-name">Java</p>
                        </div>

                        <div className="skill">
                            <img src={require('../util/icons/icons8-python-96.png')} alt=""/>
                            <p className="skill-name">Python</p>
                        </div>

                        <div className="skill">
                            <img src={require('../util/icons/icons8-react-96.png')} alt=""/>
                            <p className="skill-name">ReactJS</p>
                        </div>

                        <div className="skill">
                            <img src={require('../util/icons/icons8-node-js-96.png')} alt=""/>
                            <p className="skill-name">NodeJS</p>
                        </div>

                        <div className="skill">
                            <img src={require('../util/icons/icons8-mongodb-96.png')} alt=""/>
                            <p className="skill-name">MongoDB</p>
                        </div>

                        <div className="skill">
                            <img src={require('../util/icons/icons8-mysql-logo-96.png')} alt=""/>
                            <p className="skill-name">MySQL</p>
                        </div>
                    </div>
                </div>
            </section>
        </VisibilitySensor>
    );
}

export default About;