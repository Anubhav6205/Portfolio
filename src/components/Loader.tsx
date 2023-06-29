import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { AnimatePresence, motion } from 'framer-motion'

function Loader ({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading()
    }, 2500)
  }, [setIsLoading])
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className='loader'
          
        
          exit={{ scale: 0 }}
          key='motiondivleave'
          transition={{
            duration: 0.45,
            ease: 'easeInOut'
          }}
        >
          <motion.svg
            id='logo'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
          >
            <title>Logo</title>
            <g>
              <g id='K' transform='translate(0,0)'>
                <motion.text
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    delay: 1
                  }}
                  exit={{
                    scale: 5
                  }}
                  x='50'
                  y='50'
                  textAnchor='middle'
                  dominantBaseline='middle'
                  fontSize='40'
                  fontFamily='Arial, sans-serif'
                  fill='currentColor'
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  A
                </motion.text>
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut'
                }}
                exit={{
                  scale: 2
                }}
                stroke='currentColor'
                strokeWidth='5'
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z'
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
