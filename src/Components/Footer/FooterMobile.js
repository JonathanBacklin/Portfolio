import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import { devInfo } from '../../JSON/DevInfo'
import './CSS/FooterMobile.css'

const FooterMobile = () => {
  return (
    <>
      <footer>
        <a href="#" className='Footer-logo'>JONATHAN BACKLIN</a>

        <ul className='Permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="Footer-socials">
          <a href="https://linkedin.com"><AiOutlineLinkedin/></a>
          <a href="https://github.com"><AiFillGithub/></a>
          <a href="https://instagram.com"><AiFillInstagram/></a>
        </div>
      </footer>

      <div className="Footer-copyright">
        <small className='Copyright-text'>&copy; {devInfo.name} {devInfo.surname}. All rights reserved.</small>
      </div>
    </>
  )
}

export default FooterMobile