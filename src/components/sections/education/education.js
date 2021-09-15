import React from "react";
import data from "../../../data/education.json";
import EducationItem from "./education_item";

const Education = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="education"
    >
      <div className="w-100">
        <div className="container">
          <h2 className="mb-5">Education</h2>
          {data["education"].map((item, key) => {
            return (
              <EducationItem
                cgpa={item["cgpa"]}
                dates={item["dates"]}
                degree={item["degree"]}
                image={item["image"]}
                institution={item["institution"]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
