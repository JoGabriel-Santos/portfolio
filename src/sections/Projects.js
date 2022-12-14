import React from 'react';

function Projects() {
    return (
        <section className={'section-projects'} id={'projects'}>
            <div className={'container center-text'}>
                <span className={'subheading'}>
                    Projects
                </span>

                <h2 className={'heading-secondary'}>
                    Some things I’ve built
                </h2>
            </div>

            <div className={'container grid grid--center-v grid-projects grid-projects-text-first'}>
                <div className={'step-text-box'}>
                    <p className={'step-number'}>01</p>

                    <a href="https://github.com/JoGabriel-Santos/facebook-clone" target="_blank" rel="noreferrer">
                        <h3 className={'heading-tertiary step-tittle'}>
                            Facebook clone
                        </h3>
                    </a>

                    <p className={'step-description'}>
                        This project was built using the MERN Stack:

                        MongoDB / Express / React / NodeJS
                    </p>

                    <div className={'technology-used'}>
                        <i className="bi bi-filetype-jsx"></i>
                        <i className="bi bi-filetype-css"></i>
                        <i className="bi bi-bootstrap"></i>
                    </div>
                </div>

                <a href="https://github.com/JoGabriel-Santos/facebook-clone" target="_blank" rel="noreferrer">
                    <div className={'step-image-box step-image-box-text-first'}>
                        <img className={'step-image'} src={require('../util/projects/facebook-clone.jpg')} alt=""/>
                    </div>
                </a>
            </div>

            <div className={'container grid grid--center-v grid-projects-padding grid-projects-image-first'}>
                <a className={'grid-projects-img'}
                   href="https://github.com/JoGabriel-Santos/resto"
                   target="_blank" rel="noreferrer">

                    <div className={'step-image-box step-image-box-image-first'}>
                        <img className={'step-image'} src={require('../util/projects/resto.jpg')} alt=""/>
                    </div>
                </a>

                <div className={'step-text-box'}>
                    <p className={'step-number'}>02</p>

                    <a href="https://github.com/JoGabriel-Santos/resto" target="_blank" rel="noreferrer">
                        <h3 className={'heading-tertiary step-tittle'}>
                            Resto
                        </h3>
                    </a>

                    <p className={'step-description'}>
                        Fast food restaurant website built with HTML and CSS.
                        Project developed to obtain a grade on Web Development
                        discipline
                    </p>

                    <div className={'technology-used'}>
                        <i className="bi bi-filetype-html"></i>
                        <i className="bi bi-filetype-css"></i>
                    </div>
                </div>
            </div>

            <div className={'container grid grid--center-v grid-projects grid-projects-text-first'}>
                <div className={'step-text-box'}>
                    <p className={'step-number'}>03</p>

                    <a href="https://github.com/JoGabriel-Santos/mips-simulator" target="_blank" rel="noreferrer">

                        <h3 className={'heading-tertiary step-tittle'}>
                            MIPS Simulator
                        </h3>
                    </a>

                    <p className={'step-description'}>
                        A monocycle CPU based on MIPS instruction set.
                        Project developed to obtain a grade on Computer
                        Architecture discipline
                    </p>

                    <div className={'technology-used'}>
                        <i className="bi bi-filetype-java"></i>
                    </div>
                </div>

                <a href="https://github.com/JoGabriel-Santos/mips-simulator" target="_blank" rel="noreferrer">
                    <div className={'step-image-box step-image-box-text-first'}>
                        <img className={'step-image'} src={require('../util/projects/mips.jpg')} alt=""/>
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Projects;
