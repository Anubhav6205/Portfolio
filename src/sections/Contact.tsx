import Button from '@/components/Button'
import React from 'react'
import { motion } from 'framer-motion'
export default function Contact () {
  const handleEmailClick = () => {
    window.location.href =
      'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anubhavgupta6205@gmail.com'
  }

  return (
    <motion.div
      className='contact-container'
      id='contact'
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <div className='title'>
        <h2>Get In Touch</h2>
      </div>
      <div className='contact'>
        <h2 className='quote'>
          <p>Let &#x27;s make</p> <p>something <span
               >great!</span></p>
        </h2>
        <Button
          text='Summon Me'
          link='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anubhavgupta6205@gmail.com'
        ></Button>
      </div>
    </motion.div>
  )
}
