import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
function Experience () {
  const experiences = [
    {
      name: 'Celebal Technologies',
      role: 'Full Stack Developern Summer Intern',
      start: 'June 2021',
      end: 'Present',
      description: [
        'Immersed in an extensive learning experience focused on React.js, actively participating in professional-led training and hands-on workshops.',
        'Played an integral role in collaborative web application development, leveraging expertise and fostering effective teamwork.',
        'Engaged in dynamic, interactive learning environments, continuously honing React.js skills while actively contributing to impactful projects.'
      ]
    },

    {
      name: 'Code Clause',
      role: 'Web Developer Intern',
      start: 'April 2023',
      end: 'May 2023',
      description: [
        'Built a fully responsive music player, modern unit converter, and timer cum stopwatch during my web developer internship at Code Clause. Awarded with a letter of recommendation and internship completion letter.',
        'Took a hands-on role in developing the projects, ensuring their successful completion within a tight deadline of 6 days. Recognized for outstanding performance with a letter of recommendation and internship completion letter.',
        'Utilized Next.js and Material UI to create the projects, delivering cutting-edge solutions with exceptional user experiences. Received a letter of recommendation and internship completion letter as an acknowledgment of my achievements.'
      ]
    },

    {
      name: 'Microsoft LSA',
      role: 'Full Stack Developer',
      start: 'January 2023',
      end: 'March 2023',
      description: [
        'As a Microsoft Learn Student Ambassador, I actively participated in Collab.mp3, a cutting-edge music player project. We developed an exceptional UI with machine learning algorithms for accurate song prediction.',
        'Contributing to frontend and backend development in a team of three, I used React.js for a responsive UI and Node.js with MongoDB for efficient data management.',
        'My role encompassed creating engaging UIs, seamless interactions, and collaborating on backend infrastructure design. This experience enhanced my technical skills and fostered effective teamwork in a music, tech, and data-driven environment.'
      ]
    }
  ]

  const [selectedExperience, setSelectedExperience] = useState(0)
  useEffect(() => {
    const sideUnderline = document.querySelector<HTMLElement>('.underline')
    if (sideUnderline) {
      sideUnderline.style.top = `${selectedExperience * 5}rem`
    }
  }, [selectedExperience])
  return (
    <motion.div className='experience-container' id='experience'
    initial={{ opacity: 0,y:100 }} whileInView={{ opacity: 1,y:0 }}
    transition={{duration:2}}
    viewport={{ once: true }}>
      <div className='title'>
        <h2>Adventures in Adulting</h2>
      </div>
      <div className='experience'>
        <ul className='experience-slider'>
          <div className='underline'></div>
          {experiences.map((experience, index) => {
            return (
              <li
                key={index}
                className={`experience-slider-item  ${
                  selectedExperience === index ? 'selected-item' : ''
                }`}
                onClick={() => setSelectedExperience(index)}
              >
                <span>{experience.name}</span>
              </li>
            )
          })}
        </ul>
        <div className='experience-details'>
          <div className='experience-details-item'>
            <h2 className='company'>
              <span className='role'>
                {experiences[selectedExperience].role}
              </span>
              <span className='name'>
                - {experiences[selectedExperience].name}
              </span>
            </h2>
            <p className='experience-details-time'>
              {experiences[selectedExperience].start} -{' '}
              {experiences[selectedExperience].end}
            </p>
            <ul className='experience-details-description-list'>
              {experiences[selectedExperience].description.map(
                (description, index) => {
                  return (
                    <li className='experience-details-item' key={index}>
                      {description}
                    </li>
                  )
                }
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience
