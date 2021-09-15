import React from "react";
import ExperienceItem from "./experience_item";
import data from "../../../data/experience.json";

const Experience = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <div className="container">
          <h2 class="mb-5">Experience</h2>
          {data["experiences"].map((item, key) => {
            return (
              <ExperienceItem
                job_title={item["job_title"]}
                company={item["company"]}
                dates={item["dates"]}
                description={item["description"]}
                image={item["image"]}
                projects={item["projects"]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
