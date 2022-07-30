import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Transition from "./Transition/Transition";
import Transition2 from "./Transition/Transition2";
import Transition3 from "./Transition/Transition3";

const App = () => {
  return (
    <div>

      {/* Swedish and english version of website */}
      <Hero />
      <Transition />
      <Projects />
      <Transition2 />
      <About />
      <Transition3 />
      <Contact />

    </div>
  );
}

export default App;
