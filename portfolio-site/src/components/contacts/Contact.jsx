import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ix7h435', 'service_ix7h435', form.current, 'VxdN6-7wBnY348cO9')

    e.target.reset()
  };
  
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sabin.ogknight@gmail.com</h5>
            <a href="mailto:sabin.ogknight@gmail.com" target="_blank">Send a message</a>

          </article>

          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Sabin Neupane</h5>
            <a href="https://m.me/sabin.ogknight" target="_blank">Send a message</a>

          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+977-9841794138</h5>
            <a href="https://api.whatsapp.com/send?phone=9841794138" target="_blank">Send a message</a>

          </article>

        </div>
        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Yout Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact