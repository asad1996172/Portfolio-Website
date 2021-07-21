import React from 'react'

const ExperienceItem = (props) => {
    return (
        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
                <h3 class="mb-0">{props.job_title}</h3>
                <div class="subheading mb-3">
                    <img src={props.image} alt="" height="40px" width="40px" id="experience_img_style" /> {props.company}
                </div>
                <p> {props.description} </p>
                <ul>
                    {
                        props.projects.map((project_desc, key) => {
                            return <li>{project_desc}</li>
                        })
                    }
                    
                </ul>
            </div>
            <div class="resume-date text-md-right">
                <span class="text-primary">{props.dates}</span>
            </div>
        </div>
    )
}

export default ExperienceItem
