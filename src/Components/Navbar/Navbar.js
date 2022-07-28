import React from 'react'
import "./CSS/Navbar.css"
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <Link to="/" className='Navbar-content'><h2>LOGO</h2></Link>
        <div className="Navbar-container">
          <Link to="#PROJECTS" className="Navbar-content" smooth><h2>PROJECTS</h2></Link>
          <Link to="#ABOUT" className="Navbar-content" smooth><h2>ABOUT</h2></Link>
          <Link to="#CONTACT" className="Navbar-content" smooth><h2>CONTACT</h2></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar