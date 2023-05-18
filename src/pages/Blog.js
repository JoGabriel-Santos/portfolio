import React from "react";

import Navbar from "../sections/Navbar";

function Blog() {

    return (
        <React.Fragment>
            <Navbar/>

            <section className="section-blog">
                <div className="featured">
                    <div className="featured--project-image">
                        <img className="step-image" src={require('../util/projects/mips.jpg')} alt=""/>

                        <button className="button button--post">
                            FEATURED POST
                        </button>
                    </div>

                    <div className="featured--project-info">
                        <div className="project-info--title">
                            <div className="technologies">
                                <p className="tech">HTML</p>
                                <p className="tech">CSS</p>
                                <p className="tech">PHP</p>
                            </div>

                            <h2 className="project-title">MIPS Simulator</h2>
                        </div>

                        <h4 className="project-description">
                            A CPU designed with a MIPS instruction set that operates on a monocycle
                            architecture refers to a central processing unit (CPU) that follows the
                            MIPS instruction set architecture and implements a monocycle execution model.
                            In this context, a monocycle architecture means that each instruction completes
                            its execution within a single clock cycle.
                        </h4>

                        <button className="button button--read">
                            Continue reading...
                        </button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Blog;