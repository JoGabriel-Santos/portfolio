import React, { useEffect, useState } from "react";

import Languages from "../components/Languages";

function Github() {
    const [arrayRepositories, setArrayRepositories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch('https://api.github.com/users/jogabriel-santos/repos').then(response => response.json()).then(data => {
                if (data.length >= 6) {
                    setArrayRepositories(data.slice(0, 6));
                }
            })
        }

        fetchData();
    })

    function formattedRepoDate(date) {
        const newDate = date.substring(0, 10);

        return newDate.split('-').reverse().join(' / ');
    }

    return (
        <section className="section-github" id="github">
            <div className="container center-text">
                <span className="subheading">
                    More projects below
                </span>

                <h2 className="heading-secondary">
                    Other Github projects
                </h2>
            </div>

            <div className="container grid grid-github grid--3-cols margin-bottom-md">

                {
                    arrayRepositories.map((repository, index) => (

                        <div className="github-projects" key={index}>
                            <a href={repository.html_url} target="_blank" rel="noreferrer">
                                <div className="github-projects-content">
                                    <p className="github-projects-title">{repository.name}</p>

                                    <p className="github-projects-last-update">last update: {formattedRepoDate(repository.updated_at)}</p>

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
    );
}

export default Github;