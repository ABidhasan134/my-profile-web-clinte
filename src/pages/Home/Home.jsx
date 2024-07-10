import React from 'react'
import Bannar from './components/bannar'
import TitleAndSub from '../../shard/titleAndSub'
import AboutMe from './aboutMe/aboutMe'

const Home = () => {
  return (
    <div className='text-center'>
        <Bannar></Bannar>
        <TitleAndSub title='About Raisul' subtitle='know more about me and my worke'></TitleAndSub>
        <AboutMe></AboutMe>
    </div>
  )
}

export default Home
