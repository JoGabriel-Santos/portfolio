import React from 'react';

import Logo from '../util/Logo.svg';

function Navbar() {
    return (
        <header className={'header'}>
            <a className={'logo'} href="#hero">
                <img src={Logo} alt=""/>
            </a>

            <nav className={'main-navigation'}>
                <ul className={'main-navigation-list'}>
                    <li><a className={'main-navigation-link'} href="#hero">Home</a></li>
                    <li><a className={'main-navigation-link'} href="#about">About</a></li>
                    <li><a className={'main-navigation-link'} href="#projects">Projects</a></li>
                    <li><a className={'main-navigation-link'} href="#github">Github</a></li>
                    <li><a className={'main-navigation-link'} href="#contact">Contact</a></li>

                    <li><a className="main-navigation-link margin-right-sm navigation-cta"
                           href={require('../util/resume/Resume_Gabriel.pdf')} download>

                        Download resume
                    </a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
