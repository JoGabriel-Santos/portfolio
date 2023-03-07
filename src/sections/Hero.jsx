import React from "react";

function Hero() {

    return (
        <section className="section-hero" id="hero">
            <div className="hero">
                <div className="hero-text-box">
                    <h1 className="heading-primary">
                        Hey, I'm Gabriel Santos
                    </h1>

                    <p className="hero-description">
                        As a Computer Scientist, I am actively seeking fresh opportunities to
                        utilize the knowledge and skills gained through my academic studies.
                    </p>

                    <div className="buttons-hero">
                        <a className="button button--full margin-right-sm" href="/blog">
                            Visit my Blog
                        </a>

                        <a className="button button--outline"
                           href="https://www.linkedin.com/in/jogabriel-santos/">
                            See my LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-links" id="socials">
                <ul className="links-list">
                    <li className="socials-icon">
                        <a href="https://api.whatsapp.com/send?phone=5598981688750">
                            <img className="whatsapp" src={require("../util/socials/whatsapp.png")} alt=""/>
                        </a>
                    </li>

                    <li className="socials-icon">
                        <a href="https://github.com/JoGabriel-Santos">
                            <img src={require("../util/socials/github.png")} alt=""/>
                        </a>
                    </li>

                    <li className="socials-icon">
                        <a href="https://www.linkedin.com/in/jogabriel-santos/">
                            <img src={require("../util/socials/linkedin.png")} alt=""/>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="container-socials-email" id="socials">
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