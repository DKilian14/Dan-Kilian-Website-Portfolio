import React from 'react'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {AiOutlineLinkedin} from "react-icons/ai"
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {


  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_9mz9mcc', 'template_640fdei', form.current, 'h3Ei9OJqk133B-52m')
    e.target.reset()
    }






  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Info</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>DanKilian@yahoo.com</h5>
            <a href="mailto:DanKilian@yahoo.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5></h5>
            <a href="https://www.linkedin.com/in/daniel-kilian-b69606113/" target="_blank">Connect Here</a>
          </article>
          {/* <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>DanKilian@yahoo.com</h5>
            <a href="mailto:DanKilian@yahoo.com" target="_blank">Send a Message</a>
          </article> */}
        </div>
        {/* END OF CONTACT OPTIONS  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder="Your Full Name" required />
          <input type='email' name='email' placeholder="Your Email" required />
          <textarea name='message' rows="7" placeholder="Your Messaage" required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact