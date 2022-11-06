import React from 'react';
import Logo from '../util/Logo.svg';

function Navbar() {
    return (
        <header className={'header'}>
            <a className={'logo'} href="#">
                <img src={Logo} alt=""/>
            </a>

            <nav className={'main-navigation'}>
                <ul className={'main-navigation-list'}>
                    <li><a className={'main-navigation-link'} href="#">Home</a></li>
                    <li><a className={'main-navigation-link'} href="#">About</a></li>
                    <li><a className={'main-navigation-link'} href="#">Skills</a></li>
                    <li><a className={'main-navigation-link'} href="#">Projects</a></li>
                    <li><a className={'main-navigation-link'} href="#">Contact</a></li>

                    <li><a className="main-navigation-link margin-right-sm navigation-cta" href="#">Download CV</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
