import Button from '@/components/Button'
import Logo from '@/components/Logo'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '/#about', name: 'About' },
  { href: '/#experience', name: 'Experience' },
  { href: '/#work', name: 'Work' },
  { href: '/#contact', name: 'Contact' }
]

export default function Navbar () {
  const [navbarBlur, setNavbarBlur] = useState(false)
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false)
 

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setNavbarBlur(true)
        console.log('true')
      } else {
        setNavbarBlur(false)
        console.log(false)
      }
    })
  }, [])

  useEffect(() => {
    const main = document.querySelector('main')
    if (responsiveNavVisible) {
      main?.classList.add('blur-background')
    } else {
      main?.classList.remove('blur-background')
    }
  }, [responsiveNavVisible])

  useEffect(() => {
    const links = document.querySelectorAll('.nav-items-list-item-link')
    links.forEach(link => {
      link.addEventListener('click', () => setResponsiveNavVisible(false))
    })
    const nav = document.querySelector('.nav-items')
    nav?.addEventListener('click', e => {
      e.stopPropagation()
    })
    const html = document.querySelector('html')
    html?.addEventListener('click', e => {
      setResponsiveNavVisible(false)
    })
  }, [])

  return (
    <nav>
      <div className={`wrapper ${navbarBlur ? 'navbar-blur ' : ''}`}>
        <motion.div
          className='logo'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href='https://www.linkedin.com/in/anubhav-gupta-92410a244/'>
            <Logo />
          </Link>
        </motion.div>
        <motion.div
          className='nav-responsive-toggle '
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {responsiveNavVisible ? (
            <IoMdClose
              onClick={e => {
                e.stopPropagation()
                setResponsiveNavVisible(false)
              }}
            />
          ) : (
            <BiMenuAltRight
              onClick={e => {
                e.stopPropagation()
                setResponsiveNavVisible(true)
              }}
            />
          )}
        </motion.div>

        <div
          className={` ${
            responsiveNavVisible ? 'nav-responsive ' : ''
          } nav-options`}
        >
          <ul className='nav-options-list'>
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                  delay: 0.2 + index * 0.1
                }}
              >
                <Link href={link.href} className='nav-items-list-item-link'>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className='nav-option-button'
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: 0.6
            }}
          >
            <Button text='Resume' link='https://drive.google.com/file/d/1HYbH4DPwmjh1zQBwtKSLdIlfVLR39o3p/view?usp=sharing' />
          </motion.div>
        </div>
      </div>
    </nav>
  )
}
