import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic'

const UseOneBlog = (id) => {
  const axiouPublic=useAxiosPublic()
  // console.log(id)
  const {data:oneBlog={},isLoading,refetch}=useQuery({
    queryKey: ['oneBlog',id],
    queryFn: async()=>{
        const res= await axiouPublic.get(`/blog/${id}`)
        // console.log(res.data);
        return res.data;
    }
  })
  return [oneBlog,isLoading,refetch]
}

export default UseOneBlog
