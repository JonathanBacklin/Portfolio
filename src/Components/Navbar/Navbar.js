import React, { useEffect, useState } from 'react'
import "./CSS/Navbar.css"
import { HashLink as Link } from 'react-router-hash-link'
import { FiArrowUp } from 'react-icons/fi'
import UseResizeHook from '../UseResizeHook'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
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

  const closeNavbar = () => {
    setToggleOpen(false)

  }

  return (
    <>
      <div className={`Navbar-wrapper ${scroll ? "Navbar-scrolled" : null}`}>
        <div className='Navbar-container'>
          <Link to='/' onClick={scrollTop} className='Navbar-logo'>LOGO</Link>
          <div style={{ position: 'relative', zIndex: '4' }}>
            <button onClick={handleToggle} className='Navbar-button'>{toggleOpen ? <MdClose /> : <FiMenu />}</button>
          </div>
          <div className={`Navbar-links ${toggleOpen ? 'showMenu' : null}`}>
            <Link to='#PROJECTS' onClick={closeNavbar} className="Navbar-link" smooth>PROJECTS</Link>
            <Link to='#ABOUT' onClick={closeNavbar} className="Navbar-link" smooth>ABOUT</Link>
            <Link to='#CONTACT' onClick={closeNavbar} className="Navbar-link" smooth>CONTACT</Link>
          </div>
        </div>
      </div>
      {/* {width > breakpoint ?
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
        {toggleOpen ?
          <div onClick={handleToggle} className="Navbar-wrapper">
          <Link to="/" className='Navbar-content' onClick={scrollTop}><h2>LOGO</h2></Link>
          <div className="Navbar-container">
          <Link to="#PROJECTS" className="Navbar-content" smooth><h2>PROJECTS</h2></Link>
          <Link to="#ABOUT" className="Navbar-content" smooth><h2>ABOUT</h2></Link>
          <Link to="#CONTACT" className="Navbar-content" smooth><h2>CONTACT</h2></Link>
          </div>
          </div> : <h1 onClick={handleToggle}>Close</h1>}
          </div>

          
          
          Scrollbar progress bar
        } */}
      {scrollUp ? <FiArrowUp className='scroll-up-button' onClick={scrollTop} /> : null
      }
    </>

  )
}

export default Navbar