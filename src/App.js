import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Transition from "./Transition/Transition";

const App = () => {
  return (
    <div>

      {/* Swedish and english version of website */}
      <Hero />
      <Transition />
      <Projects />
      <Transition />
      <About />
      <Transition />
      <Contact />

    </div>
  );
}

export default App;
