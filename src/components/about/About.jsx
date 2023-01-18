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
            <img src={ME} alt='AboutImage'></img>
          </div>
        </div>
 
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ years software </small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Teams</h5>
              <small>Worked in teams of 10+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Repositories</h5>
              <small> 8+ projects available on Github</small>
            </article>
          </div>

          <p>
            I've enjoyed working with computers my whole life, playing video games, building my own rigs, and helping the occasional friend or family 
            member with their tech issues. After using my free time to create helpful scripts at my non-tech 
            jobs, I realized I want to do this not just on the side, but as a career.  
          </p>

          <a href='#contact' className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About 