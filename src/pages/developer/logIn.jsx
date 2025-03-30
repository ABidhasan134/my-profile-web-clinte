import React from "react";

const LogIn = () => {
  const handleDevelop = (event) => {
    event.preventDefault();
    const email = event.target.userName.value;
    const password = event.target.password.value;
    console.log(email, password);
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
