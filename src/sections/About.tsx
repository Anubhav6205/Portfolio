import React, { useState } from 'react'
import { motion } from 'framer-motion'
export default function About () {
  const [hoveredWord, setHoveredWord] = useState('')
  return (
    <div
      className='about-container'
      id='about'
  
    >
      <div className='about-title'>
        <h2 className='title'>
          <motion.span
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      
        

        
           transition={{duration:2}}
           exit={{ opacity: 0 }}
           >
            <p >
              <span
                onMouseEnter={() => setHoveredWord('I')}
                onMouseLeave={() => setHoveredWord('')}
                className={`${
                  hoveredWord.length > 0 && hoveredWord !== 'I'
                    ? 'hovered-word'
                    : ''
                }`}
              >
                I
              </span>
              <span
                onMouseEnter={() => setHoveredWord('design')}
                onMouseLeave={() => setHoveredWord('')}
                className={`${
                  hoveredWord.length > 0 && hoveredWord !== 'design'
                    ? 'hovered-word'
                    : ''
                }`}
              >
                {' '}
                desgin
              </span>
              <span
                onMouseEnter={() => setHoveredWord('&')}
                onMouseLeave={() => setHoveredWord('')}
                className={`${
                  hoveredWord.length > 0 && hoveredWord !== '&'
                    ? 'hovered-word'
                    : ''
                }`}
              >
                {' '}
                &
              </span>{' '}
              <span
                onMouseEnter={() => setHoveredWord('build')}
                onMouseLeave={() => setHoveredWord('')}
                className={`${
                  hoveredWord.length > 0 && hoveredWord !== 'build'
                    ? 'hovered-word'
                    : ''
                }`}
              >
                build
              </span>
            </p>
            <p>
              <span
                onMouseEnter={() => setHoveredWord('digital')}
                onMouseLeave={() => setHoveredWord('')}
                className={`${
                  hoveredWord.length > 0 && hoveredWord !== 'digital'
                    ? 'hovered-word'
                    : ''
                }`}
              >
                digital
              </span>{' '}
              <span
                onMouseEnter={() => setHoveredWord('products')}
                onMouseLeave={() => setHoveredWord('')}
                className={`${
                  hoveredWord.length > 0 && hoveredWord !== 'products'
                    ? 'hovered-word'
                    : ''
                }`}
              >
                products
              </span>
            </p>
          </motion.span>
        </h2>
      </div>
      <motion.div className='about-main'
      initial={{ opacity: 0,y:300 }} whileInView={{ opacity: 1,y:0 }}
      transition={{duration:1}}
      viewport={{ once: true }}>
        <div className='about-text'>
          <h2 className='heading'>The Mysterious Being Behind the Screen</h2>
          <h2 className='title'>Hi, I`m Anubhav!</h2>
          <p className='subtitle'>
            I`m a passionate web developer with{' '}
            <span className='highlight'>
              top-notch programming and design skills
            </span>
            . My expertise lies in developing next-level websites and web
            applications, with a strong focus on creating captivating frontend
            designs.
          </p>
          <p className='description'>
            I define myself{' '}
            <span className='highlight'> not by past accomplishments</span>, but
            by the work I aspire to do. I believe skills can be taught, while
            inherent personality traits drive true impact. I thrive on{' '}
            <span className='highlight'>
              continuous learning, embracing challenges, and pursuing meaningful
              endeavors
            </span>{'.'}
            
          </p>

          <div className='technologies'>
            <h3 className='technologies-title'>
              Some technologies I`ve worked with:
            </h3>
            <ul className='technologies-list'>
              <li>React.Js</li>
              <li>Next.Js</li>
              <li>Three.Js</li>
              <li>Tailwind CSS</li>
              <li>SCSS</li>
              <li>Material UI</li>
              <li>Typescript</li>
              <li>Node.Js</li>
              <li>Redux Toolkit</li>
              <li>C++</li>
              <li>Javascript</li>
              <li>Java</li>
            </ul>
          </div>
        </div>
        <div className='about-image'>
          <div className='overlay'></div>
          <img src='/about_image.jpeg' alt='pic' />
        </div>
      </motion.div>
    </div>
  )
}
