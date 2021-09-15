import React from "react";

const EducationItem = (props) => {
  return (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">
          <img
            src={props.image}
            alt=""
            height="40px"
            width="40px"
            id="experience_img_style"
          />{" "}
          {props.institution}{" "}
        </h3>
        <div className="subheading mb-3">{props.degree}</div>
        <p>GPA: {props.cgpa}</p>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{props.dates}</span>
      </div>
    </div>
  );
};

export default EducationItem;
