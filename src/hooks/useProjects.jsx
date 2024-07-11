
import useAxiosPublic from './useAxiosPublic'
import { useQuery } from '@tanstack/react-query';



const useProjects = () => {
    const axiosPublic=useAxiosPublic();
    const {data:projects=[]} = useQuery({
         queryKey: ['projects'], 
         queryFn: async()=>{
            const res=await axiosPublic.get('/projects')
            return res.data
         }
         })
  return [projects]
}

export default useProjects
