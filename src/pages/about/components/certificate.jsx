import React from 'react'
import phCertificate from '../../../../public/img/phCertificate.jpg'

const Certificate = () => {
  
  return (
   <div className='flex flex-wrap justify-center gap-4'>
     <div className="group relative text-center w-96 px-6 py-7 rounded-md overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.6,0.4,0,1)] transform border-2 border-blue-600 flex flex-col justify-center items-center gap-4 text-black">
      <div className="icon">
        <figure>
          <img src={phCertificate} alt="pH certificate" className='w-96'/>
        </figure>
      </div>
      <strong className="text-white text-[1.4rem] tracking-[-0.035em]  transition-all duration-300 ease-[cubic-bezier(0.6,0.4,0,1)]">
        Frontend webdevelopmete by programing Hero
      </strong>
      
      {/* <span className="absolute inset-0 w-full h-full flex justify-center items-center text-[#e50087] font-bold text-[1em] rounded-md top-full group-hover:top-0 group-hover:text-[1.2em] transition-all duration-300 ease-[cubic-bezier(0.6,0.4,0,1)]">
        Follow us
      </span> */}
      <small className='text-white'>Issu Date: 2 july 2024</small>
    </div>
   </div>
  );
}

export default Certificate
