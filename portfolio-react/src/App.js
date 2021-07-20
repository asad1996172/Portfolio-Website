import About from "./components/sections/about/about";
import Publications from "./components/sections/publications/publications";
import SideNavbar from "./components/sidebar/side_navbar";

function App() {
  return (
    <div>
      <SideNavbar />
      <div class="container-fluid p-0">
        <About />
        <hr class="m-0"></hr>
        <Publications />
        <hr class="m-0"></hr>
      </div>
    </div>
  );
}

export default App;
