import React from 'react'
import './style.css';

const About = () => {
    return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1 className="mb-5">
                                Asad <span className="text-primary">Mahmood</span>
                            </h1>
                            <div className="lead mb-5">
                                <a href="mailto:amahmood1@uiowa.com"> <i className="fas fa-envelope"></i>amahmood1@uiowa.edu</a> 
                                <a href="/assets/resume.pdf" id="about_resume"
                                    className="btn btn-primary" role="button">Resume</a>
                                <br/>
                                <i className="fas fa-phone-alt"></i> (319) 512-5163 <br/>
                                <i className="fas fa-map-marker-alt"></i> 1015 Oakcrest Street Apt G3, Iowa City, IA 52246
                            </div>
                            <p className="lead mb-5">I am a final-year Masters student in the department of Computer Science at <a href="https://cs.uiowa.edu/">The University of Iowa</a>. I am advised by <a href="http://homepage.cs.uiowa.edu/~psriniva/newsite/index.html">Dr. Padmini Srinivasan</a> and co-advised by <a href="https://homepage.divms.uiowa.edu/~mshafiq/">Dr. Zubair Shafiq</a> from The University of Iowa. My research is focused on using Natural Language Processing and Machine Learning techniques to enhance user privacy. I also have a keen interest in the fields of Data Science and Software Engineering. Previously, I worked at <a href="http://www.tpilums.org/">TPI Lab</a> in LUMS under the supervision of <a href="https://lums.edu.pk/lums_employee/422">Dr. Fareed Zaffar</a>.</p> <p className="lead mb-5"><span className="text-primary">Interests: </span>I love to play all kinds of sports. Specifically, I like Soccer, Squash and Cricket. I also love hiking.</p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/asad1996172/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/asad1996172">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://twitter.com/asad177mahmood">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://medium.com/@asad007mahmood">
                                    <i className="fab fa-medium"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col">

                        <div>
                            <h3 className="text-primary" id> Highlights
                            </h3>
                        </div>
                        <br/>
                        <div className="entry-content"
                            id="highlights">
                            <ul id="highlights_list">
                                <li><span className="text-primary" id="highlight_date">JULY 2020: </span>Virtually presented our paper at ACL Main Conference.</li>
                                <li><span className="text-primary" id="highlight_date">MAY 2020: </span>Started Internship as AI/ML Engineer at GSK.</li>
                                <li><span className="text-primary" id="highlight_date">APR 2020: </span>Our paper titled &#34;A Girl Has A Name: Detecting Authorship Obfuscation&#34; got published in ACL.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About
