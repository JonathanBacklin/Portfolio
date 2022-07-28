import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";

const App = () => {
  return (
    <div>

      {/* Swedish and english version of website */}
      <Hero />
      <Projects />
      <About />
      <Contact />

    </div>
  );
}

export default App;
