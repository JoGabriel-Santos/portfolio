import React from 'react';

import Logo from '../util/Logo.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container center-text">
                <div className="logo-column">
                    <a className="footer-logo" href="#">
                        <img className="logo" src={Logo} alt=""/>
                    </a>

                    <p className="copyright">Copyright &copy; 2022 by Gabriel Santos</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
