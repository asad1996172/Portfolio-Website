import React from "react";
import data from "../../data/skills.json";

const Skills = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="skills"
    >
      <div className="w-100">
        <div className="container">
          <h2 className="mb-5">Skills</h2>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="subheading mb-3" id="skills_heading">
                  Programming Languages
                </div>
                <ul className="fa-ul mb-0">
                  {data["programming_languages"].map((item, key) => {
                    return (
                      <li>
                        <i class="fa-li fa fa-circle"></i>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col">
                <div className="subheading mb-3" id="skills_heading">
                  Machine Learning Libraries
                </div>
                <ul className="fa-ul mb-0">
                  {data["ml_libs"].map((item, key) => {
                    return (
                      <li>
                        <i class="fa-li fa fa-circle"></i>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="subheading mb-3" id="skills_heading">
                  Web Development
                </div>
                <ul className="fa-ul mb-0">
                  {data["web_frameworks"].map((item, key) => {
                    return (
                      <li>
                        <i class="fa-li fa fa-circle"></i>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col">
                <div className="subheading mb-3" id="skills_heading">
                  Mobile Development
                </div>
                <ul className="fa-ul mb-0">
                  {data["mob_dev"].map((item, key) => {
                    return (
                      <li>
                        <i class="fa-li fa fa-circle"></i>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <br />
          <div>
            <p>
              Apart from these, I also have experience in{" "}
              <span id="skills_heading">Web Scraping</span> using selenium and{" "}
              <span id="skills_heading"> Graphics Designing</span> using Adobe
              Tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
