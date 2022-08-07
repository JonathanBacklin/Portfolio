import React from "react";
import '../Navbar/CSS/NavbarMobile.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { BiMessageSquareDetail} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useState } from "react";

const NavbarMobile = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <Link to="#HOME" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></Link>
      <Link to="#PROJECTS" onClick={() => setActiveNav('#PROJECTS')} className={activeNav === '#PROJECTS' ? 'active' : ''}><BiBook/></Link>
      <Link to="#ABOUT" onClick={() => setActiveNav('#ABOUT')} className={activeNav === '#ABOUT' ? 'active' : ''}><AiOutlineUser/></Link>
      <Link to="#CONTACT" onClick={() => setActiveNav('#CONTACT')} className={activeNav === '#CONTACT' ? 'active' : ''}><BiMessageSquareDetail/></Link>
    </nav>
  )   
}

export default NavbarMobile