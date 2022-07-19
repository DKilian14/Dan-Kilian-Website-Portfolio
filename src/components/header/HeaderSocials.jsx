import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/daniel-kilian-b69606113/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/DKilian14" target="_blank"><FaGithub/></a>
        {/* <a href="https://discord.com/app" target="_blank"><FaDiscord/></a> */}
    </div>
  )
}

export default HeaderSocials