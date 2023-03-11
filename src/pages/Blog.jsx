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
            <section className="section-blog">
                <div className="container center-text hero-animation">
                    <span className="subheading"> Welcome to my blog </span>

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