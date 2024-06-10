import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;