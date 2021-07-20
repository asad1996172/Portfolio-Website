import React from 'react'
import Highlights from './highlights';
import '../../css/style.css'
import AboutContent from './about_content';

const About = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                           <AboutContent />
                        </div>
                        <div className="col">
                            <Highlights />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
