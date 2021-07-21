import About from "./components/sections/about/about";
import Publications from "./components/sections/publications/publications";
import SideNavbar from "./components/sidebar/side_navbar";
import Helmet from "react-helmet";
import Projects from "./components/sections/projects/projects";
import Experience from "./components/sections/experience/experience";
import Skills from "./components/sections/skills";

function App() {
  return (
    <div>
      <SideNavbar />
      <div class="container-fluid p-0">
        <About />
        <hr class="m-0"></hr>
        <Publications />
        <hr class="m-0"></hr>
        <Projects />
        <hr class="m-0"></hr>
        <Experience />
        <hr class="m-0"></hr>
        <Skills />
        <hr class="m-0"></hr>
      </div>
      <Helmet>
        <script src="./assets/js/resume.min.js"></script>
      </Helmet>
    </div>
  );
}

export default App;
