import Link from 'next/link';
import React from 'react';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import {motion} from 'framer-motion' 
export default function OtherProjects() {
  const otherProjects = [
    {
      name: 'Jambox',
      description: 'A music player app built with React.Js and Spotify API',
      tech: ['React.Js', 'ContextAPI', 'Spotify API'],
      link: 'https://github.com/Anubhav6205/Jambox',
      extLink:'https://github.com/Anubhav6205/Jambox'
    },
    {
      name: 'Tailwind Website Clone',
      description:
        'A clone of the Tailwind website built with React.Js and TailwindCSS',
      tech: ['React.Js', 'TailwindCSS'],
      link: 'https://github.com/Anubhav6205/Tailwind-webite-clone',
      extLink:' https://64779289edd16707dcdfa74d--peppy-custard-bf6f6a.netlify.app/'
    },
    {
      name: 'UniVerse',
      description:
        'A sleek React.js unit converter with a wide range of conversion options for length, area, temperature, logarithmic values, and currency.',
      tech: ['Next.Js', 'CSS'],
      link: 'https://github.com/Anubhav6205/UniVerse',
      extLink:' https://6470dff3f93cfe21a6027ce3--sunny-malabi-7f576a.netlify.app/'
    },
  ];

  return (
    <div className="other-projects-container">
      <div className="titles">
        <h2 className="title">Notable Project Extras</h2>
        <p className="sub-title">
          <a href="https://github.com/Anubhav6205" target="_blank">
            View the repositories
          </a>
        </p>
      </div>

      <div className="other-projects-lists">
        {otherProjects.map(({ name, description, tech, link,extLink }, index) => (
          <motion.div className="other-projects-box" key={index}
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: .01,delay:index*.1 }}
          viewport={{ once: true }}
          whileHover={{ y:-5 }}
          >
            
            <div className="icons">
              <div className="folder-icon">
                <a href={extLink} target="_blank">
                  <FiFolder />
                </a>
              </div>
              <div className="social-icon">
                <a href={extLink} target="_blank">
                  <FiGithub />
                </a>
                <a href={extLink} target="_blank">
                  <FiExternalLink />
                </a>
              </div>
            </div>

            <div className="other-projects-content">
              <h3 className="other-projects-title">{name}</h3>
              <p className="other-projects-description">{description}</p>
            </div>

            <div className="other-projects-tech">
              <ul className="other-projects-tech-list">
                {tech.map((tech, index) => (
                  <li className="other-projects-tech-list-item" key={index}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
