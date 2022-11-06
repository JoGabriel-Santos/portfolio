import React from 'react';

function Projects() {
    return (
        <section className={'section-projects'}>
            <div className={'container center-text'}>
                <span className={'subheading'}>
                    Projects
                </span>

                <h2 className={'heading-secondary'}>
                    Some things I’ve built
                </h2>
            </div>

            <div
                className={'container grid grid--center-v grid-projects grid-projects-text-first'}>
                <div className={'step-text-box'}>
                    <p className={'step-number'}>01</p>

                    <h3 className={'heading-tertiary'}>
                        Facebook clone
                    </h3>

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

                <div className={'step-image-box'}>
                    <img className={'step-image'}
                         src={require('../util/projects/facebook-clone.jpeg')}
                         alt=""/>
                </div>
            </div>

            <div
                className={'container grid grid--center-v grid-projects-padding grid-projects-image-first'}>
                <div className={'step-image-box'}>
                    <img className={'step-image'}
                         src={require('../util/projects/resto.PNG')} alt=""/>
                </div>

                <div className={'step-text-box'}>
                    <p className={'step-number'}>02</p>

                    <h3 className={'heading-tertiary'}>
                        Resto
                    </h3>

                    <p className={'step-description'}>
                        Fast food restaurant website built with html and css.
                        Project developed to obtain a grade on Web Development
                        discipline
                    </p>

                    <div className={'technology-used'}>
                        <i className="bi bi-filetype-html"></i>
                        <i className="bi bi-filetype-css"></i>
                    </div>
                </div>
            </div>

            <div
                className={'container grid grid--center-v grid-projects grid-projects-text-first'}>
                <div className={'step-text-box'}>
                    <p className={'step-number'}>03</p>

                    <h3 className={'heading-tertiary'}>
                        MIPS Simulator
                    </h3>

                    <p className={'step-description'}>
                        A monocycle CPU based on MIPS instruction set.
                        Project developed to obtain a grade on Computer
                        Architecture
                        discipline
                    </p>

                    <div className={'technology-used'}>
                        <i className="bi bi-filetype-java"></i>
                    </div>
                </div>

                <div className={'step-image-box'}>
                    <img className={'step-image'}
                         src={require('../util/projects/mips.PNG')} alt=""/>
                </div>
            </div>
        </section>
    );
}

export default Projects;
