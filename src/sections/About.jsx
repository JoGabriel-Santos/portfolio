import React, { useEffect, useRef, useState } from "react";

import VisibilitySensor from "react-visibility-sensor";

function About() {

    const listRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);
    const [alreadyShowed, setAlreadyShowed] = useState(false);

    const onAnimationEnd = () => {
        setIsVisible(true);
        setAlreadyShowed(true);
    };

    const animateListItems = () => {
        const listItems = listRef.current.querySelectorAll('.skill');
        let index = 0;

        const animateNextListItem = () => {
            if (index < listItems.length) {
                const currentItem = listItems[index];
                currentItem.classList.add("about-animation");

                setTimeout(() => {
                    index++;
                    animateNextListItem();
                }, 100);
            }
        };

        animateNextListItem();
    };

    useEffect(() => {
        if (alreadyShowed) animateListItems();

    }, [alreadyShowed])

    return (
        <VisibilitySensor partialVisibility={0.8} onChange={!alreadyShowed && setIsVisible}>
            <section
                className={`section-about ${isVisible ? "section-animation" : "opacity-0"}`}
                onAnimationEnd={onAnimationEnd} id="about">

                <div className="container center-text">
                    <span className="subheading">
                        About me
                    </span>

                    <h2 className="heading-secondary">
                        Here, you can discover additional details about myself
                    </h2>
                </div>

                <div className="container grid grid-about grid--2-cols grid--center-v">
                    <div className="about-description">

                        <p className="about-description-text">
                            Hello, my name is Gabriel Santos, and I am a Full Stack Web Developer with a passion for crafting
                            beautiful and functional web applications. In 2016, I embarked on a journey into the world of
                            development by enrolling in a Computer Technician course.
                        </p>

                        <p className="about-description-text">
                            I am currently pursuing a degree in Computer Science, where I have gained a strong foundation
                            in programming languages, algorithms, and data structures. I am continually expanding my knowledge
                            by staying up-to-date with the latest industry trends and learning new technologies,
                            with a particular focus on ReactJs at the moment.
                        </p>

                        <p className="about-description-text">
                            Feel free to explore some of my completed <a href="#projects"><b>projects</b></a> below.
                        </p>
                    </div>

                    <div className="about-skills grid grid--4-cols" ref={listRef}>
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