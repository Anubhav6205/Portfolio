import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
export default function Email () {
  return (
    <motion.div className='email'
    initial={{opacity:0,y:300}}
    animate={{opacity:1,y:0}}
    transition={{delay:2.5,duration:1}}>
      <Link href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anubhavgupta6205@gmail.com'  target='_blank' className='email-link'>
        anubhavgupta6205@gmail.com
      </Link>
    </motion.div>
  )
}
