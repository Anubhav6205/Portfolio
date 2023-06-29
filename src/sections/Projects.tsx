import Link from 'next/link'
import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function Projects () {
  const projectsData = [
    {
      image: '/project1.png',
      projectName: 'Vibe',
      projectLink: 'https://github.com/Anubhav6205/Vibe',
      projectDescription:
        'A modern chat app built with React, Material UI, and real-time communication using Socket.io. Users can easily sign up with their Google ID and chat with loved ones in a visually stunning interface. It supports file sharing (photos, PDFs, videos) and allows users to personalize their own about section.',
      projectTech: [
        'React.Js',
        'ContextAPI',
        'Socket.io',
        'Material UI',
        'Node.Js',
        'MongoDB'
      ],
      projectExternalLinks: {
        github: '',
        externalLink: 'https://github.com/Anubhav6205/Vibe'
      }
    },
    {
      image: '/project2.png',
      projectName: 'KIINECT',
      projectLink: 'https://github.com/Anubhav6205/KIInect',
      projectDescription:
        'The Ultimate Campus Experience for KIITians! Connect, collaborate, and share effortlessly. Ignite discussions, discover new horizons, and foster meaningful connections. With stunning UI/UX and practical utilities, Kiinect amplifies your journey at KIIT, creating a vibrant community for growth and engagement.',
      projectTech: [
        'React.Js',
        'Redux Toolkit',
        'Node.Js',
        'MongoDB',
        'Google Auth'
      ],
      projectExternalLinks: {
        github: '',
        externalLink: 'https://github.com/Anubhav6205/KIInect'
      }
    },
    {
      image: '/project3.png',
      projectName: 'Scroll Scape 3D',
      projectLink: 'https://github.com/Anubhav6205/ScrollScape3D',
      projectDescription:
        'A captivating 3D experience! Mesmerizing scroll effects, dynamic color changes, and a rotating planeMesh create a stunning ridged structure. With directional lighting, this immersive web page brings interactivity and visual aesthetics together',
      projectTech: ['Three.Js', 'Gsap', 'dat.gui', 'OrbitControls'],
      projectExternalLinks: {
        github: '',
        externalLink: 'https://github.com/Anubhav6205/ScrollScape3D'
      }
    }
  ]
  return (
    <div className='projects' id='work'>
      <div className='title'>
        <h2>Some Things I’ve Built</h2>
      </div>
      <div className='projects-container'>
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech
          }) => {
            return (
              <div className='project' key={projectName}>
                <div className='project-image'>
                  <div className='project-image-overlay'></div>
                  <div className='project-image-container'>
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <motion.div
                  className='project-info'
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <p className='project-info-overline'>Featured Project</p>
                  <h3 className='project-info-title'>{projectName}</h3>
                  <div className='project-info-description'>
                    <p>{projectDescription}</p>
                  </div>
                  <ul className='project-info-tech-list'>
                    {projectTech.map(tech => (
                      <li className='project-info-tech-list-item' key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className='project-info-links'>
                    <li className='project-info-links-item'>
                      <Link
                        href={projectLink}
                        target='_blank'
                        className='project-info-links-item-link'
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className='project-info-links-item'>
                      <Link
                        target='_blank'
                        href={projectExternalLinks.externalLink}
                        className='project-info-links-item-link'
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
