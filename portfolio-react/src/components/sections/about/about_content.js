import React from 'react'
import parse from 'html-react-parser';
import data from '../../../data/about.json';

const AboutContent = () => {
    return (
        <div>
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

            <div className="lead mb-5">
                {parse(data["description"])}
            </div>

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
    )
}

export default AboutContent
