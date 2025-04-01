import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from 'sweetalert2'
const LogIn = () => {
  // const [devInfo,isLoading,refetch]=UseLoginInfo();
  // console.log(devInfo);
    const axiosPublic=useAxiosPublic();
    const handleDevelop = async (event) => {
      event.preventDefault();
      
      const userName = event.target.userName.value;
      const password = event.target.password.value;
      const info = { userName, password };
    
      try {
        const res = await axiosPublic.post('/logInDev', info);
        
        if (res.data.status === 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You can now develop",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (res.data.status === 403) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Your password is wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Your username is not valid",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong. Please try again.",
          showConfirmButton: false,
          timer: 1500,
        });
        console.error("Login error:", error);
      }
    };

  return (
    <div className="flex justify-center items-center min-h-[600px]">
      <form onSubmit={handleDevelop} className="w-96 p-8 flex flex-col items-center shadow-lg">
        <p className="text-wheat text-2xl font-semibold mb-12">Develop My Profile</p>
        <input
          type="text"
          placeholder="Username"
          className="w-80 p-3 bg-transparent text-wheat border-b border-wheat outline-none focus:bg-gray-700 rounded-md transition duration-400 mb-4"
          name="userName"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-80 p-3 bg-transparent text-wheat border-b border-wheat outline-none focus:bg-gray-700 rounded-md transition duration-400 mb-4"
          name="password"
        />
        <button
          type="submit"
          className="w-80 h-12 mt-8 bg-wheat text-gray-900 hover:text-gray-300 text-lg font-medium rounded-md transition duration-400 shadow-md hover:bg-antiquewhite hover:shadow-none"
        >
          Develop Mode On
        </button>
      </form>
    </div>
  );
};

export default LogIn;
