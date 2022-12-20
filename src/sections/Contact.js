import React from 'react';

function Contact() {
    return (
        <section className={'section-contact'} id={'contact'}>
            <div className={'contact container center-text'}>
                <span className={'subheading'}>
                    Get in touch
                </span>

                <h2 className={'heading-secondary'}>
                    Send me an email
                </h2>

                <span className={'contact-description'}>
                    Feel free to contact me and I will get back to you as soon as possible
                </span>
            </div>

            <div className={'container center-text contact'}>
                <a className="main-navigation-link navigation-cta"
                    href="mailto: jgabriel.professional@gmail.com">

                    SEND E-MAIL
                </a>
            </div>
        </section>
    );
}

export default Contact;
