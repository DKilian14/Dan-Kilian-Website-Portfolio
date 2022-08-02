import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {

  const patchCheckFill = "experience__details-icon"

  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className={patchCheckFill} />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className={patchCheckFill} />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className={patchCheckFill}  />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className={patchCheckFill}  />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className={patchCheckFill}  />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        {/* {END OF FRONT END} */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className={patchCheckFill}  />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className={patchCheckFill}  />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className={patchCheckFill}  />
              <div>
                <h4>Postgres</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className={patchCheckFill}  />
              <div>
                <h4>Python</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience