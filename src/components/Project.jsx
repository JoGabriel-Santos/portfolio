import React from "react";

function Project() {

    return (
        <div className="project-card">
            <img className="project-image" src={require("../util/projects/mips.jpg")} alt=""/>

            <div className="project-content">
                <h2 className="project-content--name">MIPS Simulator</h2>
                <h6 className="project-content--description">
                    A CPU designed with a MIPS instruction set that operates on a monocycle
                    architecture refers to a central processing unit (CPU) that follows the
                    MIPS instruction set architecture and implements a monocycle execution model.
                </h6>
            </div>
        </div>
    )
}

export default Project;