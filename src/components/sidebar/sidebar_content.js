import React from "react";

const SidebarContent = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#about">
            ABOUT
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#publications">
            PUBLICATIONS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#projects">
            PROJECTS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#experience">
            EXPERIENCE
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#skills">
            SKILLS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#education">
            EDUCATION
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarContent;
