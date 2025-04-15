import React from 'react'
import UseBlogs from '../../hooks/useBlogs'
import BlogBannar from './blogBannar'
import BlogsCard from './blogsCard'
import { motion } from "framer-motion" 

const Blogs = () => {
  const [allBlogs, isLoading] = UseBlogs()

  if (isLoading) {
    return <p className="text-center text-xl mt-10">Loading...</p>
  }

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="py-8">
      <BlogBannar />

      {allBlogs.length > 0 ? (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid min-h-screen justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {allBlogs.map((blog) => (
            <motion.div key={blog._id} variants={cardVariant}>
              <BlogsCard blog={blog} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No blogs found.</p>
      )}
    </div>
  )
}

export default Blogs
