import React, { useEffect, useRef } from "react";

import Logo from "../util/Logo.svg";

function Navbar() {

    const listRef = useRef(null);

    useEffect(() => {
        const allLinks = document.querySelectorAll('a:link');
        const btnNavEl = document.querySelector('.button-navigation-mobile');
        const headerEl = document.querySelector('.header');

        const socials_left = document.querySelector('.container-links');
        const socials_right = document.querySelector('.container-email');

        btnNavEl.addEventListener('click', function () {
            headerEl.classList.toggle('nav-open');

            socials_left.classList.toggle('show-socials');
            socials_right.classList.toggle('show-socials');
        });

        allLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                const href = link.getAttribute('href');

                // Scroll back to top
                if (href === '#')
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });

                if (href !== '#') {
                    window.location.href = href;
                }

                // Scroll to other links
                if (href !== '#' && href.startsWith('#')) {
                    const sectionEl = document.querySelector(href);
                    sectionEl.scrollIntoView({ behavior: 'smooth' });
                }

                if (link.classList.contains('main-navigation-link')) {
                    headerEl.classList.toggle('nav-open');

                    socials_left.classList.toggle('show-socials');
                    socials_right.classList.toggle('show-socials');
                }
            });
        });

        animateListItems();
    }, []);

    const animateListItems = () => {
        const listItems = listRef.current.querySelectorAll('li');
        let index = 0;

        const animateNextListItem = () => {
            if (index < listItems.length) {
                const currentItem = listItems[index];
                currentItem.classList.add("animation-links");

                setTimeout(() => {

                    index++;
                    animateNextListItem();
                }, 100);
            }
        };

        animateNextListItem();
    };

    return (
        <header className="header" id="header">
            <a className="logo animation-links" href="#hero">
                <img src={Logo} alt=""/>
            </a>

            <nav className="main-navigation">
                <ul className="main-navigation-list" ref={listRef}>
                    <li><a className="main-navigation-link" href="#hero">Home</a></li>
                    <li><a className="main-navigation-link" href="#about">About</a></li>
                    <li><a className="main-navigation-link" href="#projects">Projects</a></li>
                    <li><a className="main-navigation-link" href="#github">Github</a></li>
                    <li><a className="main-navigation-link" href="#contact">Contact</a></li>
                    <li>
                        <a className="main-navigation-link margin-right-sm navigation-cta"
                           href={require('../util/resume/Gabriel Santos.pdf')} download>
                            Download resume
                        </a>
                    </li>
                </ul>
            </nav>

            <button className="button-navigation-mobile">
                <div className="icon-navigation-mobile">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <div className="icon-navigation-mobile">
                    <ion-icon name="close-outline"></ion-icon>
                </div>
            </button>
        </header>
    );
}

export default Navbar;