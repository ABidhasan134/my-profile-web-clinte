import React from 'react'

const BlogsCard = ({blog}) => {
  return (
<div
  class="z-40 my-6 group flex flex-col justify-center items-start gap-2  duration-500 relative rounded-lg p-4 bg-[#2A323C] hover:-translate-y-2 hover:shadow-xl shadow-black"
>

  {/* <div
    class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-purple-400"
    alt="image here"
  ></div> */}

  <div >
    <h2 class="text-2xl font-bold text-white">{blog.title}</h2>
    <small class="mb-4 text-white">{blog.date}</small>
    <p class="text-gray-200 line-clamp-5">{blog.description}</p>
  </div>
  
<button className="btn" onClick={()=>document.getElementById(blog._id).showModal()}>Full blog</button>
<dialog id={blog._id} className='bg-transparent'>
  <div className="modal-box relative  border-2 border-blue-500 max-w-[1000px] p-6">
    <h3 className="font-bold text-lg">{blog.title}</h3>
    <small className="pb-4">{blog.time}  {blog.date}</small>
    <figure>
      <img src={blog.image} alt="context Image" className='rounded-lg'/>
    </figure>
    <p>{blog.description}</p>
    <div className="modal-action">
      <form method="dialog">
{/* <AnimatedCursor color='30, 64, 175'/> */}
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>

  )
}

export default BlogsCard
