import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.JPG'


const data = [
  {id:1,
  image: IMG1,
  title:'Chicago Permit Application Automation',
  github: 'https://github.com/DKilian14/CDOT-Permit-Application',
  demo: 'https://youtube.com', 
},
{id:2,
  image: IMG2,
  title:'Meme Generator',
  github: 'https://github.com',
  demo: 'https://youtube.com', 
},
{id:3,
  image: IMG3,
  title:'Password Generator',
  github: 'https://github.com/DKilian14/Password-Generator',
  demo: 'https://youtube.com', 
},
{id:4,
  image: IMG4,
  title:'Leads Tracker (Chrome Extension)',
  github: 'https://github.com',
  demo: 'https://youtube.com', 
},
{id:5,
  image: IMG5,
  title:'Jobs Webscraper',
  github: 'https://github.com',
  demo: 'https://youtube.com', 
},
{id:6,
  image: IMG6,
  title:'Notes Editor',
  github: 'https://github.com',
  demo: 'https://youtube.com', 
},


]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
              </div>
            </article>
            )
          }
          
          )
        }
        



      </div>
    </section>
  )
}

export default Portfolio





