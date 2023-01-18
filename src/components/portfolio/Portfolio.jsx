import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/bankApp.JPG'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/mechanicsville.PNG'


const data = [
  {id:1,
  image: IMG1,
  title:'Chicago Permit Application Automation',
  github: 'https://github.com/DKilian14/CDOT-Permit-Application',
  demo: '', 
},
{id:2,
  image: IMG2,
  title:'Modern Bank Landing Page (React)',
  github: 'https://github.com/DKilian14/bank-modern-app',
  demo: 'https://dkilian14.github.io/bank-modern-app/', 
},
{id:3,
  image: IMG3,
  title:'Password Generator',
  github: 'https://github.com/DKilian14/Password-Generator',
  demo: '', 
},
{id:4,
  image: IMG4,
  title:'RPG Map Generator',
  github: 'https://github.com/DKilian14/rpg_game',
  demo: '', 
},
{id:5,
  image: IMG5,
  title:'Jobs Webscraper',
  github: 'https://github.com/DKilian14/Jobs_Search_Results',
  demo: '', 
},
{id:6,
  image: IMG6,
  title:'Mechanicsville, IA Front Page',
  github: 'https://github.com/DKilian14/Mechanicsville-IA_City_Website',
  demo: 'https://mechanicsvilleia.netlify.app/', 
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

            if (demo !== ''){
              return(
                  <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Page</a>
                  </div>
                </article>
                    )
            }else {
              return(
                <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                </div>
              </article>
              )
            }
            
          }
          
          )
        }
        



      </div>
    </section>
  )
}

export default Portfolio





