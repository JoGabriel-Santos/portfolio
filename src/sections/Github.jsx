import React, { useEffect, useRef, useState } from "react";

import VisibilitySensor from "react-visibility-sensor";

import Languages from "../components/Languages";

function Github() {
    const listRef = useRef(null);

    const [arrayRepositories, setArrayRepositories] = useState([]);

    const [isVisible, setIsVisible] = useState(false);
    const [alreadyShowed, setAlreadyShowed] = useState(false);

    const onAnimationEnd = () => {
        setIsVisible(true);
        setAlreadyShowed(true);
    };

    useEffect(() => {
        async function fetchData() {
            await fetch('https://api.github.com/users/jogabriel-santos/repos').then(response => response.json()).then(data => {
                if (data.length >= 6) {
                    setArrayRepositories(data.slice(0, 6));
                }
            })
        }

        fetchData();
    }, [])

    function formattedRepoDate(date) {
        const newDate = date.substring(0, 10);

        return newDate.split('-').reverse().join(' / ');
    }

    const animateListItems = () => {
        const listItems = listRef.current.querySelectorAll('.github-projects');
        let index = 0;

        const animateNextListItem = () => {
            if (index < listItems.length) {
                const currentItem = listItems[index];
                currentItem.classList.add("up-animation");

                setTimeout(() => {
                    index++;
                    animateNextListItem();
                }, 100);
            }
        };

        animateNextListItem();
    };

    useEffect(() => {
        if (alreadyShowed) animateListItems();

    }, [alreadyShowed])

    return (
        <VisibilitySensor partialVisibility={0.8} onChange={!alreadyShowed && setIsVisible}>
            <section
                className={`section-github ${isVisible ? "section-animation" : "opacity-0"}`}
                onAnimationEnd={onAnimationEnd} id="github">

                <div className="container center-text">
                <span className="subheading">
                    More projects below
                </span>

                    <h2 className="heading-secondary">
                        Other Github projects
                    </h2>
                </div>

                <div className="container grid grid-github grid--3-cols margin-bottom-md" ref={listRef}>

                    {
                        arrayRepositories.map((repository, index) => (

                            <div className="github-projects" key={index}>
                                <a href={repository.html_url} target="_blank" rel="noreferrer">
                                    <div className="github-projects-content">
                                        <p className="github-projects-title">{repository.name}</p>

                                        <p className="github-projects-last-update">created at: {formattedRepoDate(repository.created_at)}</p>

                                        <div className="github-projects-tags">
                                            <Languages repository_name={repository.name}/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }

                </div>
            </section>
        </VisibilitySensor>
    );
}

export default Github;