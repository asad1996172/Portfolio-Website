import Sidenavigation from "./components/sidenavigation";
import About from "./components/about";
import Publications from "./components/publications";

function App() {
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

export default App;
