import React, { useState } from "react";

import VisibilitySensor from "react-visibility-sensor";

function Projects() {

    const [isVisible, setIsVisible] = useState(false);
    const [alreadyShowed, setAlreadyShowed] = useState(false);

    const [firstProjectVisible, setFirstProjectVisible] = useState(false);
    const [secondProjectVisible, setSecondProjectVisible] = useState(false);
    const [thirdProjectVisible, setThirdProjectVisible] = useState(false);

    const [firstProjectAlreadyShowed, setFirstProjectAlreadyShowed] = useState(false);
    const [secondProjectAlreadyShowed, setSecondProjectAlreadyShowed] = useState(false);
    const [thirdProjectAlreadyShowed, setThirdProjectAlreadyShowed] = useState(false);

    return (
        <VisibilitySensor partialVisibility={0.8} onChange={!alreadyShowed && setIsVisible}>
            <section
                className={`section-project ${isVisible ? "section-animation" : "opacity-0"}`} id="projects"
                onAnimationEnd={() => {
                    setIsVisible(true);
                    setAlreadyShowed(true);
                }}>

                <div className="container center-text">
                    <span className="subheading">
                        Projects
                    </span>

                    <h2 className="heading-secondary">
                        Some things I’ve built
                    </h2>
                </div>

                <ul className="project-list">

                    <VisibilitySensor partialVisibility={1} onChange={!firstProjectAlreadyShowed && setFirstProjectVisible}>
                        <li
                            className={`project ${firstProjectVisible ? "left-right-animation" : "opacity-0"}`}
                            onAnimationEnd={() => {
                                setFirstProjectVisible(true);
                                setFirstProjectAlreadyShowed(true);
                            }}>

                            <div className="container grid grid--center-v grid-projects grid-projects-text-first">
                                <div className="step-text-box">
                                    <p className="step-number">01</p>

                                    <a href="https://github.com/JoGabriel-Santos/friendly" target="_blank" rel="noreferrer">
                                        <h3 className="heading-tertiary step-tittle">
                                            Friendly
                                        </h3>
                                    </a>

                                    <p className="step-description">
                                        Revolutionize communication with a global touch – Friendly, crafted with React Native, Node.js, and MongoDB,
                                        seamlessly simulates worldwide letter exchanges, bringing a nostalgic charm to modern connectivity.
                                    </p>

                                    <div className="technology-used">
                                        <i className="bi bi-filetype-jsx"></i>
                                        <i className="bi bi-filetype-css"></i>
                                        <i className="bi bi-phone-fill"></i>
                                    </div>
                                </div>

                                <a href="https://github.com/JoGabriel-Santos/friendly" target="_blank" rel="noreferrer">
                                    <div className="step-image-box step-image-box-text-first">
                                        <img className="step-image" src={require('../util/projects/friendly.png')} alt=""/>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </VisibilitySensor>

                    <VisibilitySensor partialVisibility={1} onChange={!secondProjectAlreadyShowed && setSecondProjectVisible}>
                        <li
                            className={`project ${secondProjectVisible ? "right-left-animation" : "opacity-0"}`}
                            onAnimationEnd={() => {
                                setSecondProjectVisible(true);
                                setSecondProjectAlreadyShowed(true);
                            }}>

                            <div className="container grid grid--center-v grid-projects-padding grid-projects-image-first">
                                <a className="grid-projects-img"
                                   href="https://github.com/JoGabriel-Santos/airbnb-clone"
                                   target="_blank" rel="noreferrer">

                                    <div className="step-image-box step-image-box-image-first">
                                        <img className="step-image" src={require('../util/projects/airbnb.png')} alt=""/>
                                    </div>
                                </a>

                                <div className="step-text-box">
                                    <p className="step-number">02</p>

                                    <a href="https://github.com/JoGabriel-Santos/airbnb-clone" target="_blank" rel="noreferrer">
                                        <h3 className="heading-tertiary step-tittle">
                                            Airbnb
                                        </h3>
                                    </a>

                                    <p className="step-description">
                                        I successfully developed a replica of the Airbnb website,
                                        showcasing my proficiency in React and Node.js. This project
                                        exemplifies my skills in creating dynamic and responsive web applications.
                                    </p>

                                    <div className="technology-used">
                                        <i className="bi bi-filetype-jsx"></i>
                                        <i className="bi bi-filetype-css"></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </VisibilitySensor>

                    <VisibilitySensor partialVisibility={1} onChange={!thirdProjectAlreadyShowed && setThirdProjectVisible}>
                        <li
                            className={`project ${thirdProjectVisible ? "left-right-animation" : "opacity-0"}`}
                            onAnimationEnd={() => {
                                setThirdProjectVisible(true);
                                setThirdProjectAlreadyShowed(true);
                            }}>

                            <div className="container grid grid--center-v grid-projects grid-projects-text-first">
                                <div className="step-text-box">
                                    <p className="step-number">03</p>

                                    <a href="https://github.com/JoGabriel-Santos/resto" target="_blank" rel="noreferrer">

                                        <h3 className="heading-tertiary step-tittle">
                                            Resto
                                        </h3>
                                    </a>

                                    <p className="step-description">
                                        An HTML and CSS-based website for a fast food restaurant was created as a
                                        project to fulfill the requirements of a Web Development discipline
                                    </p>

                                    <div className="technology-used">
                                        <i className="bi bi-filetype-html"></i>
                                        <i className="bi bi-filetype-css"></i>
                                        <i className="bi bi-filetype-php"></i>
                                    </div>
                                </div>

                                <a href="https://github.com/JoGabriel-Santos/resto" target="_blank" rel="noreferrer">
                                    <div className="step-image-box step-image-box-text-first">
                                        <img className="step-image" src={require('../util/projects/resto.jpg')} alt=""/>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </VisibilitySensor>
                </ul>
            </section>
        </VisibilitySensor>
    );
}

export default Projects;