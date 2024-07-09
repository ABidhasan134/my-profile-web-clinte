import React from 'react'
import Navbar from '../navbar/navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='container mx-auto '>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default Main
