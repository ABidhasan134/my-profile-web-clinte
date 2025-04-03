import React, { createContext, useEffect, useState } from 'react'
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext= createContext();
const AuthProvider = ({children}) => {
  const axiosPublic=useAxiosPublic();
  const[developer,setDeveloper]=useState(null)
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    const developer= localStorage.getItem("developer");
    if(developer){
      try{
        const parseDeveloper= JSON.parse(developer)
        axiosPublic.post('/jwt',)
        // console.log("This is from the authh provider",parseDeveloper)
        setDeveloper(parseDeveloper)
        setLoading(false);

      }
      catch(e){
        console.log("this error from the auth",e)
      }
    }
    // console.log("This is current developer from auth",developer);
  },[])
  const authInfo={developer,setDeveloper,loading,setLoading}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
