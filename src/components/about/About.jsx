import React from 'react'
import './about.css'
import ME from "../../assets/me-about.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'></img>
          </div>
        </div>
 
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ years working working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Teams</h5>
              <small>Worked in teams of 10+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>
            This is where I will put an about-me blurb, This should be roughly 300 characters, or 4 lines. 
          </p>

          <a href='#contact' className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About 