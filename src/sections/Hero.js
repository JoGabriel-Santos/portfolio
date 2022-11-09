import React from 'react';

function Hero() {
    return (
        <section className={'section-hero'} id={'hero'}>
            <div className={'hero'}>
                <div className={'hero-text-box'}>
                    <h1 className={'heading-primary'}>
                        Hey, I'm Gabriel Santos
                    </h1>

                    <p className={'hero-description'}>
                        A Computer Scientist with more than 5 years of programming experience,
                        focused on APIs, backend logic, databases and servers.
                    </p>

                    <div className={'buttons-hero'}>
                        <a className={'button button--full margin-right-sm'}
                           href={'https://github.com/JoGabriel-Santos'}>
                            See Github projects
                        </a>

                        <a className={'button button--outline'}
                           href={'https://www.linkedin.com/in/jogabriel-santos/'}>
                            Visit my LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            <div className={'hero-socials'}>
                <ul className={'socials'}>
                    <li className={'socials-icon'}>
                        <a href="https://api.whatsapp.com/send?phone=5598981688750">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </a>
                    </li>

                    <li className={'socials-icon'}>
                        <a href="https://www.instagram.com/jgabriel.sant0s/">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>

                    <li className={'socials-icon'}>
                        <a href="https://www.linkedin.com/in/jogabriel-santos/">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </li>

                    <li className={'socials-icon'}>
                        <a href="https://github.com/JoGabriel-Santos">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={'arrow-down'}>
                <a href="#about">
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </a>
            </div>
        </section>
    );
}

export default Hero;