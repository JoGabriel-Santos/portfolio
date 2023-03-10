import React, { useState } from "react";

import VisibilitySensor from "react-visibility-sensor";

function Contact() {

    const [isVisible, setIsVisible] = useState(false);
    const [alreadyShowed, setAlreadyShowed] = useState(false);

    const onAnimationEnd = () => {
        setIsVisible(true);
        setAlreadyShowed(true);
    };

    return (
        <VisibilitySensor partialVisibility={0.8} onChange={!alreadyShowed && setIsVisible}>
            <section
                className={`section-contact ${isVisible ? "section-animation" : "opacity-0"}`}
                onAnimationEnd={onAnimationEnd} id="contact">

                <div className="contact container center-text">
                <span className="subheading">
                    Get in touch
                </span>

                    <h2 className="heading-secondary">
                        Send me an email
                    </h2>

                    <span className="contact-description">
                    Feel free to contact me and I will get back to you as soon as possible
                </span>
                </div>

                <div className="container center-text contact">
                    <a className="main-navigation-link navigation-cta"
                       href="mailto: jgabriel.professional@gmail.com">

                        SEND E-MAIL
                    </a>
                </div>
            </section>
        </VisibilitySensor>
    );
}

export default Contact;