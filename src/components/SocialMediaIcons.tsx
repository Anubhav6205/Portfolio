import React from 'react'
import { AiOutlineGithub } from 'react-icons/Ai'
import { FiLinkedin, FiTwitter } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import Link from 'next/link'
import {motion} from 'framer-motion'

export default function SocialMediaIcons () {
  const socialData = [
    {
      icon: <AiOutlineGithub />,
      link: 'https://github.com/Anubhav6205',
      name: 'Github'
    },
    {
      icon: <FiLinkedin />,
      link: 'https://www.linkedin.com/in/anubhav-gupta-92410a244/',
      name: 'Linkedin'
    },
    {
      icon: <FiTwitter />,
      link: 'https://twitter.com/anubhavGupta62',
      name: 'Twitter'
    },
    {
      icon: <BsInstagram />,
      link: 'https://www.instagram.com/anu.bhav.gupta/',
      name: 'Instagram'
    }
  ]
  return (
    <motion.div className='social-media-icons'
    initial={{opacity:0,y:300}}
    animate={{opacity:1,y:0}}
    transition={{delay:2.5,duration:1}}>
      <ul className='social-media-icons-list'>
        {socialData.map((item, index) => {
          return (
            <li key={index} className='social-media-icons-list-item'>
              <Link
                href={item.link}
                className='social-media-icon-link'
                target='_blank'
              >
                {item.icon}
              </Link>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}
