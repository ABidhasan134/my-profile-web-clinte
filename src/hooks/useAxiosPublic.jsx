
import axios from 'axios'
// https://my-protfolio-server-omega.vercel.app
const axiosPublic=axios.create({
    baseURL: 'https://my-protfolio-server-omega.vercel.app' || "http://localhost:5173",
    withCredentials: true
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic
