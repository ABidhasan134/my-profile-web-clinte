import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from './useAxiosPublic'

const UseBlogs = () => {
    const axiosPublic=useAxiosPublic()
  const {data: allBlogs=[],isLoading,refetch}=useQuery({
    queryKey: ["allBlogs"],
    queryFn: async()=>{
        const res= await axiosPublic.get('/allBlogs');
        return res.data
    }
  })
  return [allBlogs,isLoading,refetch];
}

export default UseBlogs
