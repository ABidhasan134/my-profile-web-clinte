import React from 'react'
import AboutMe from './aboutMe/aboutMe'
import { Helmet } from 'react-helmet-async'
const About = () => {
  return (
    <div>
        <Helmet>
            <title>About || Raisul</title>
        </Helmet>
     <AboutMe></AboutMe>
    </div>
  )
}

export default About
