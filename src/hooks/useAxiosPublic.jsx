
import axios from 'axios'

const axiosPublic=axios.create({
    baseURL: 'https://my-protfolio-server-omega.vercel.app',
    withCredentials: true
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic
