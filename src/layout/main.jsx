import React from 'react'
import Navbar from '../navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../global/footer/footer'

const Main = () => {
  return (
    <div>  
    <div className='container mx-auto '>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Main
