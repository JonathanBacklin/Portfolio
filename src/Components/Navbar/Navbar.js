import React, { useEffect, useState } from 'react'
import "./CSS/Navbar.css"
import { HashLink as Link } from 'react-router-hash-link'
import { FiArrowUp } from 'react-icons/fi'
import UseResizeHook from '../UseResizeHook'
const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [toggleOpen, setToggleOpen] = useState(false)
  const [scrollUp, setScrollUp] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 960;

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 50;
      setScroll(scrollCheck);
      if (window.scrollY > 500) {
        setScrollUp(true)
      } else {
        setScrollUp(false)
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll]);

  UseResizeHook(setWidth);

  const scrollTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleToggle = () => setToggleOpen(!toggleOpen)
  return (
    <>
      {width > breakpoint ?
        <div className={scroll ? "Navbar Navbar-scrolled" : "Navbar"}>
          <div className="Navbar-wrapper">
            <Link to="/" className='Navbar-content' onClick={scrollTop}><h2>LOGO</h2></Link>
            <div className="Navbar-container">
              <Link to="#PROJECTS" className="Navbar-content" smooth><h2>PROJECTS</h2></Link>
              <Link to="#ABOUT" className="Navbar-content" smooth><h2>ABOUT</h2></Link>
              <Link to="#CONTACT" className="Navbar-content" smooth><h2>CONTACT</h2></Link>
            </div>
          </div>
        </div>
        :
        <div className="Navbar">
          {toggleOpen ? <h1 onClick={handleToggle}>Open</h1> : <h1 onClick={handleToggle}>Close</h1>}
        </div>



        // Scrollbar progress bar
      }
      {scrollUp ? <FiArrowUp className='scroll-up-button' onClick={scrollTop} /> : null
      }
    </>

  )
}

export default Navbar