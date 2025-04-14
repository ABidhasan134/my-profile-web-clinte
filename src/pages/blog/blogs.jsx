import React from 'react'
import UseBlogs from '../../hooks/useBlogs'
import BlogBannar from './blogBannar'
import BlogsCard from './blogsCard'

const Blogs = () => {
  const [allBlogs, isLoading, refetch] = UseBlogs()
  console.log("all blogs ", allBlogs)
  if (isLoading) {
    return <p className="text-center text-xl mt-10">Loading...</p>
  }

  return (
    <div className="py-8">
      <BlogBannar />
      
      {allBlogs.length > 0 ? (
        <div className="grid min-h-screen justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  border-red-600 border-4 gap-6 ">
          {allBlogs.map((blog) => (
            <BlogsCard blog={blog} key={blog._id || blog.id || blog.title} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No blogs found.</p>
      )}
    </div>
  )
}

export default Blogs
