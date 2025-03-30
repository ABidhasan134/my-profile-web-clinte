import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 flex justify-evenly">
    <aside>
      <p className='text-2xl'>
        <span className='text-white font-bold text-3xl'>Raisul Islam profile</span>
        <br />
        abeydhasan134@gmail.com <br />
        Jonnior webdevoper <br />
        Mohammdpur,Dhaka,Bangladesh
      </p>
    </aside>
    <nav>
      <h6 className="footer-title">Social</h6>
      <div className="grid grid-flow-col gap-4">
        <a href='https://www.facebook.com/profile.php?id=100008589552530'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/raisul-islam134/" className="text-5xl ">
        <IoLogoLinkedin
            className="w-8 h-8"></IoLogoLinkedin>
      </a>
      <a href="https://github.com/ABidhasan134" className="text-5xl">
        <FaGithub className="w-8 h-8"></FaGithub>
      </a>
      </div>
      <Link to="/developer"><button className='btn hover:border-gray-400 text-2xl'>Developer</button></Link>
    </nav>
  </footer>
  )
}

export default Footer
