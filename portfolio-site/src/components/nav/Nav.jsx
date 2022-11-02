import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {BiBrain} from 'react-icons/bi'
import {IoMdContact} from 'react-icons/io'
import {AiOutlineMail} from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div>
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><IoMdContact/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBrain/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMail/></a>
      
      </nav>
    </div>
  )
}

export default Nav