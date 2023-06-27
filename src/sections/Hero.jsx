import React, {useEffect, useRef} from "react";

import Typing from "react-typing-effect";

function Hero() {

    const listRef = useRef(null);

    useEffect(() => {

        animateListItems();
    }, []);

    const animateListItems = () => {
        const listItems = listRef.current.querySelectorAll('.fadeUp');
        let index = 0;

        const animateNextListItem = () => {
            if (index < listItems.length) {
                const currentItem = listItems[index];
                currentItem.classList.add("hero-animation");

                setTimeout(() => {
                    index++;
                    animateNextListItem();
                }, 100);
            }
        };

        animateNextListItem();
    };

    return (
        <section className="section-hero" id="hero">
            <div className="hero">
                <div className="hero-text-box" ref={listRef}>

                    <p className="hero-paragraph fadeUp">
                        Hey, my name is
                    </p>

                    <h1 className="heading-primary fadeUp">
                        Gabriel Santos
                    </h1>

                    <span className="hero-typing fadeUp">
                        I build things with
                        <Typing
                            text={['ReactJS', 'NodeJS', 'MongoDB', 'MySQL', 'JavaScript', 'TypeScript', 'Java', 'Python']}
                            speed={200} eraseSpeed={100} eraseDelay={2500} typingDelay={500}
                        />
                    </span>

                    <p className="hero-description fadeUp">
                        As a Computer Scientist, I am actively seeking fresh opportunities to
                        utilize the knowledge and skills gained through my academic studies.
                    </p>

                    <div className="buttons-hero fadeUp">
                        <a className="button button--full margin-right-sm"
                           href="https://www.linkedin.com/in/jogabriel-santos/">
                            Visit my LinkedIn
                        </a>

                        <a className="button button--outline" href="https://github.com/JoGabriel-Santos">
                            See my Github
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-links" id="socials">
                <ul className="links-list">
                    <li className="socials-icon">
                        <a href="https://www.instagram.com/jogabriel_santos" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor"
                                 className="feather feather-instagram"><title>Instagram</title>

                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                    </li>

                    <li className="socials-icon">
                        <a href="https://github.com/JoGabriel-Santos" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor"
                                 className="feather feather-github"><title>GitHub</title>

                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54
                                        6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38
                                        13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5
                                        3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                </path>
                            </svg>
                        </a>
                    </li>

                    <li className="socials-icon">
                        <a href="https://www.linkedin.com/in/jogabriel-santos/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor"
                                 className="feather feather-linkedin"><title>LinkedIn</title>

                                <path
                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="container-email" id="socials">
                <div className="socials-email">
                    <a className="main-navigation-link"
                       href="mailto: jgabriel.professional@gmail.com">

                        <p className="email">jgabriel.professional@gmail.com</p>
                    </a>
                </div>
            </div>

            <div className="arrow-down">
                <a href="#about">
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </a>
            </div>
        </section>
    );
}

export default Hero;