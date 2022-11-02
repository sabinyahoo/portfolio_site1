import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BiBrain} from 'react-icons/bi'
import {AiOutlineProject} from 'react-icons/ai'



const About = () => {
  return (
    <section id='about'>
      <h5>here are some more things</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className='about__me'>
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <BiBrain className='about__icon'/>
              <h5>Experience</h5>
              <small>3 years of Acedemics and 1 year of SCRUM</small>
            </article>

            <article className='about__card'>
              <AiOutlineProject className='about__icon'/>
              <h5>Project</h5>
              <small>12+ College Final Projects</small>
            </article>

          </div>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore deleniti quibusdam, provident natus temporibus obcaecati consectetur expedita modi voluptatibus incidunt distinctio. Inventore eaque aut id ad vitae praesentium dolorum incidunt.
          </p>

          <a href="#contact" className='btn btn-primary'>Lets Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About