import { useEffect, useState } from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Transition from "./Transition/Transition";
import Transition2 from "./Transition/Transition2";
import Transition3 from "./Transition/Transition3";
import LoadingScreen from "./LoadingScreen"
import UseResizeHook from "./Components/UseResizeHook";
import NavbarMobile from "./Components/Navbar/NavbarMobile";
import HeroMobile from "./Hero/HeroMobile";
import ProjectMobile from "./Projects/ProjectMobile";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1100;

  UseResizeHook(setWidth);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    },
      2500)

  }, [])
  return (
    <>
      {loading ?
        <>
          {width > breakpoint ?
            <div>
              <Navbar />
              <Hero />
              <Transition />
              <Projects />
              <Transition2 />
              <About />
              <Transition3 />
              <Contact />
              <Footer />
            </div > :
            <>
              <NavbarMobile />
              <HeroMobile/>
              <ProjectMobile/>

              <Footer />
            </>
          }
        </>

        :
        <div className="Loading-screen">
          <LoadingScreen />
        </div>
      }
    </>
  );
}

export default App;
