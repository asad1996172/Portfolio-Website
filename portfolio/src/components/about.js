import React from 'react'
import './style.css';
import data from '../data/about.json';
import parse from 'html-react-parser';

const About = () => {
    return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1 className="mb-5">
                                {data["first_name"]} <span className="text-primary">{data["last_name"]}</span>
                            </h1>
                            <div className="lead mb-5">
                                <div className="row">
                                    <div className="col-10">
                                        <a href={"mailto:" + data["email_address"]}>
                                            <div className="row">
                                                <div className="col-1 hidden-xs"><i className="fas fa-envelope"></i></div>
                                                <div className="col">{data["email_address"]}</div>
                                            </div>
                                        </a>
                                        <div className="row">
                                            <div className="col-1 hidden-xs"><i className="fas fa-phone-alt"></i></div>
                                            <div className="col">{data["mobile_number"]}</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <a href={data["resume_path"]}
                                            className="btn btn-primary" role="button">Resume
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {parse(data["description"])}

                            <div className="social-icons">
                                <a href={data["linkedIn"]} id="social-media">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href={data["Github"]} id="social-media">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href={data["Twitter"]} id="social-media">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href={data["Medium"]} id="social-media">
                                    <i className="fab fa-medium"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div id="highlights-heading">
                                <h3 className="text-primary"> Highlights </h3>
                            </div>

                            <div className="entry-content"
                                id="highlights">
                                <ul id="highlights_list">
                                    {
                                        Object.keys(data["highlights"]).map((key, index) => ( 
                                            <li><span className="text-primary" id="highlight_date">{key}: </span>{data["highlights"][key]}</li>
                                        ))
                                    }
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
