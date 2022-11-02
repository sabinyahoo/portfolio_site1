import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {SiAdobexd} from 'react-icons/si'
import {FiFigma} from 'react-icons/fi'
import {SiAdobephotoshop} from 'react-icons/si'


const experience = () => {
  return (
    <section id='experience'>
      <h5>the skills i have</h5>
      <h2>My Experiences</h2>

{/*------------------------- development -------------------------*/}

      <div className="container experience__container">
        <div className="experience__dev">
          <h3>Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5/>
              <div>
                <h4>HTML</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact/>
              <div>
                <h4>React</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCss3/>
              <div>
                <h4>CSS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiJavascript1/>
              <div>
                <h4>JavaScript</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

          </div>

        </div>

{/*------------------------- design -------------------------*/}

      
        <div className="experience design">
          <h3>Design</h3>
          <div className="experience__content">
          <div className="experience__content">
            <article className='experience__details'>
              <SiAdobexd/>
              <div>
                <h4>Adobe XD</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiFigma/>
              <div>
                <h4>Figma</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiAdobephotoshop/>
              <div>
                <h4>Photoshop</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            

          </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default experience