import React from 'react'
import {GrLinkedinOption} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="__blank"><GrLinkedinOption/></a>
        <a href="https://github.com" target="__blank"><BsGithub/></a>
        <a href="https://dribbble.com" target="__blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials