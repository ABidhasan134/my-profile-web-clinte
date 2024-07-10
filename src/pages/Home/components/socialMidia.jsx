import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMidia = () => {
  return (
    <div className='m-2'>
     <a className='text-5xl ' href='https://www.facebook.com/profile.php?id=100008589552530'><FaFacebook className='text-blue-500'></FaFacebook></a>
     
     <div className="tooltip" data-tip="abeydhasan134@gamil.com">
     <MdEmail className='text-green-800 text-5xl'></MdEmail>
</div>
    </div>
  )
}

export default SocialMidia
