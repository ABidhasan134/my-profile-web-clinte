import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import logImage from '../../public/img/logoImg.png'
import { AuthContext } from '../context/authProvider';
import Connaction from '../pages/Home/connnaction/connaction';

const Navbar = () => {
  const {developer}=useContext(AuthContext);
  // console.log("this is from the navbar",developer);
    const links = (
        <>
            <li className='text-2xl'>
                <NavLink to='/' >Home</NavLink>
            </li>
            <li className='text-2xl'>
                <NavLink to='blogs'>Blog</NavLink>
            </li>
            <li className='text-2xl'>
                <NavLink to='project'>Project</NavLink>
            </li>
            <li className='text-2xl'>
                <NavLink to='about'>About</NavLink>
            </li>
            {
              developer?.userName?<li className='text-2xl'>
              <NavLink to='develop'>develop</NavLink>
          </li>:''
            }
        </>
    )

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link to='/'><img src={logImage} alt="user image" className='w-[50px] h-[50px] rounded-3xl border-2 p-[2px] border-blue-800' /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn hover:border-gray-400 text-2xl" onClick={()=>document.getElementById('my_modal_1').showModal()}>Hire me <MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <Connaction></Connaction>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
          {/* <NavLink className='btn hover:border-gray-400 text-2xl'>Hire me <MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></NavLink> */}
      </div>
    )
}

export default Navbar
