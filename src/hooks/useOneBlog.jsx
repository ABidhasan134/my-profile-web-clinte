import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const UseOneBlog = (id) => {
  console.log(id)
  const {data:oneBlog={},isLoading,refetch}=useQuery({
    queryKey: ['oneBlog',id],
    queryFn: async()=>{
        const res= await axios.get(`/blog/${id}`)
        console.log(res.data);
        return res.data;
    }
  })
  return [oneBlog,isLoading,refetch]
}

export default UseOneBlog
