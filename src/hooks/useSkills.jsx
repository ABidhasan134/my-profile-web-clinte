import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from './useAxiosPublic'

const UseSkills = () => {
    const axiosPublic=useAxiosPublic();
  const {data:skills=[],isLoading,refetch}=useQuery({
    queryKey: ["skills"],
    queryFn: async()=>{
        const response= await axiosPublic.get('/skills');
        return response.data.result;
    }
  })
  return [skills,isLoading,refetch];
}

export default UseSkills
