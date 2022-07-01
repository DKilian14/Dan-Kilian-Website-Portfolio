import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.JPG'
import AVTR3 from '../../assets/avatar3.JPG'
import AVTR4 from '../../assets/avatar4.JPG'

import {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'


const data = [
  {
    index:1,
    avatar:AVTR1,
    name:'Name of Client',
    review:"This is where the client's quote will go! woohoo!"
  },
  {
    index:2,
    avatar:AVTR2,
    name:'Client # 2',
    review:"This is another clients review"
  },
  {
    index:3,
    avatar:AVTR3,
    name:'Name of Client #3',
    review:"'I just can't believe how awesome he is!'"
  },
  {
    index:4,
    avatar:AVTR4,
    name:'Name of Client #4',
    review:"10/10 would marry again."
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

    

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}>
        {
          data.map(({avatar, name, review, index})=> {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt='Avatar'/>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonials