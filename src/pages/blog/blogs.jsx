import React from 'react'
import BlogBannar from './blogBannar'
import UseBlogs from '../../hooks/useBlogs'

const Blogs = () => {
  const [allBlogs,isLoading,refetch]=UseBlogs()
  console.log(allBlogs);
  return (
    <div>
      <BlogBannar></BlogBannar>
      here is blog
    </div>
  )
}

export default Blogs
