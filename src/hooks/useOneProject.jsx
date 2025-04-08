import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosPublic from './useAxiosPublic';

const useOneProject = (id) => {
    const axiosPublic = useAxiosPublic();
    // console.log("this id from the hook to useOneproject",id)
    const { data: projectsDetails = [],isLoading,refetch } = useQuery({
        queryKey: ["projectsDetails"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/projectsDetails/${id}`);
        //   console.log(res)
          return res.data;
        },
      });
      return [projectsDetails,isLoading,refetch]
}

export default useOneProject
