import React, { useEffect } from "react";

function Blog() {

    useEffect(() => {
        async function fetchData() {
            await fetch('https://blog-gabriel-default-rtdb.firebaseio.com/posts.json')
                .then(response => response.json())
                .then(data => {

                })
        }

        fetchData();
    }, [])

    return (
        <React.Fragment>
            <section className="section-hero" id="hero">
                <div className="hero">
                    <div className="hero-text-box">
                        <h1 className="heading-primary">
                            Hey, I'm Gabriel Santos
                        </h1>

                        <p className="hero-description">
                            This is my personal blog where I post about my programming projects with detailed explanations and instructional videos.
                        </p>

                        <div className="buttons-hero">
                            <a className="button button--full margin-right-sm"
                               href="https://github.com/JoGabriel-Santos/">
                                Visit my Github
                            </a>

                            <a className="button button--outline"
                               href="https://www.linkedin.com/in/jogabriel-santos/">
                                See my LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="arrow-down">
                    <a href="#about">
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </a>
                </div>
            </section>

            <section className="section-blog">
                <div className="container center-text">
                    <span className="subheading"> Latest posts </span>

                    <h2 className="heading-secondary">
                        Check out the most recent posts
                    </h2>
                </div>

                <div className="container grid grid--3-cols margin-bottom-md">

                </div>
            </section>
        </React.Fragment>
    );
}

export default Blog;