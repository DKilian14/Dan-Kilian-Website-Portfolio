import React from 'react'
import './footer.css'

import {FaFacebookF} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {VscGithub} from 'react-icons/vsc'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Daniel</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank"><FaFacebookF/></a>
        <a href="https://youtube.com" target="_blank"><FaYoutube/></a>
        <a href="https://github.com" target="_blank"><VscGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Dan Kilian. All Rights Reserved.</small>
      </div>

    </footer>
  )
}

export default Footer