import Sidenavigation from "./components/sidenavigation";
import About from "./components/about";

function App() {
  return (
    <div>
      <Sidenavigation />
      <div class="container-fluid p-0">
        <About />
        <hr class="m-0"></hr>
      </div>
    </div>
  );
}

export default App;
