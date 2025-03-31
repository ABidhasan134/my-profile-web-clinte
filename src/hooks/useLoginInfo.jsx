import React from 'react'
import useAxiosPublic from './useAxiosPublic'
import { useQuery } from '@tanstack/react-query';

const UseLoginInfo = () => {
  const axiosPublic=useAxiosPublic();
  const {data:devInfo={},isLoading,refetch}=useQuery({
    queryKey:["devInfo"],
    queryFn:async()=>{
        const res=await axiosPublic.get('/logInDev')
            return res.data
    }
  })
  return [devInfo,isLoading,refetch];
}

export default UseLoginInfo
