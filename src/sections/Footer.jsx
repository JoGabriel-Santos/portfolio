import React, { useState } from "react";

import VisibilitySensor from "react-visibility-sensor";

import Logo from "../util/Logo.svg";

function Footer() {

    const [isVisible, setIsVisible] = useState(false);
    const [alreadyShowed, setAlreadyShowed] = useState(false);

    const onAnimationEnd = () => {
        setIsVisible(true);
        setAlreadyShowed(true);
    };

    return (
        <VisibilitySensor partialVisibility={0.8} onChange={!alreadyShowed && setIsVisible}>
            <footer
                className={`section-footer ${isVisible ? "section-animation" : "opacity-0"}`}
                onAnimationEnd={onAnimationEnd} id="footer">

                <div className="container center-text">
                    <div className="logo-column">
                        <a className="footer-logo" href="#">
                            <img className="logo" src={Logo} alt=""/>
                        </a>

                        <p className="copyright">Copyright &copy; 2023 by Gabriel Santos</p>
                    </div>
                </div>
            </footer>
        </VisibilitySensor>
    );
}

export default Footer;