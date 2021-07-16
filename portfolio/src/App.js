import Sidenavigation from "./components/sidenavigation";
import About from "./components/about";
import Publications from "./components/publications";
import React from 'react'

class App extends React.Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "./assets/js/resume.min.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render(){
    return (
      <div>
        <Sidenavigation />
        <div class="container-fluid p-0">
          <About />
          <hr class="m-0"></hr>
          <Publications />
          <hr class="m-0"></hr>
        </div>
      </div>
    );
  }
}


export default App;
