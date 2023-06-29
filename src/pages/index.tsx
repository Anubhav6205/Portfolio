import Email from '@/components/Email'
import SocialMediaIcons from '@/components/SocialMediaIcons'
import Home from '@/sections/Home'
import Navbar from '@/sections/Navbar'
import About from '@/sections/About'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import OtherProjects from '@/sections/OtherProjects'
import Contact from '@/sections/Contact'
import Head from 'next/head'
import React, { useState } from 'react'
import Loader from '@/components/Loader'
import Cursor from '@/components/Cursor'

export default function Index () {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoaderLoaded = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 450)
  }

  return (
    <div>
      <Head>
        <title>Anubhav Gupta</title>
        <link rel='icon' href='./download.svg' />
      </Head>
     
    

      {showContent && (
        <>
         <Cursor/>
        
          <Navbar />
          <SocialMediaIcons />
          <Email />
          <main>
         
            <Home />
            <About />
            <Experience />
            <Projects />
            <OtherProjects/>
            <Contact />
          </main>
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  )
}
