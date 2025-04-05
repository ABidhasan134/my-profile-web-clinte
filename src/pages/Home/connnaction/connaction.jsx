import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2'
import { MdPerson } from "react-icons/md";

const Connaction = () => {
    const axiosPublic=useAxiosPublic();
  const { register, handleSubmit, formState: { errors } } = useForm();
//   const mutation = useMutation(data => {
//     return axiosPublic.post('/emailSend', data);
//   });

  const onSubmit = data => {
    // mutation.mutate(data);
    axiosPublic.post('/emailSend', data)
    .then((res)=>{
        if(res.status === 200)
            {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "I got your email. I will connacte with you in 12 hours",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            else{
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                  
                });
            }
        console.log(res)
    })
   
    // console.log(data)
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-2 justify-center my-4">
        {/* sender email */}
        <div className="w-[50%] grid text-start">
          <span>Your email</span>
          <input
            type="email"
            name='senderEmail'
            placeholder='Enter your email'
            className={`mt-2 input input-bordered ${errors.senderEmail ? 'input-error' : 'input-info'} w-full`}
            defaultValue=""
            {...register("senderEmail", { required: true })}
          />
          {errors.senderEmail && <span className="text-red-500">Email is required</span>}
        </div>
        {/* sender phone number */}
        <div className="w-[50%] grid text-start">
          <span>Your phone number</span>
          <input
            type="tel"
            name="phoneNumber"
            placeholder='Enter your phone number'
            className={`mt-2 input input-bordered ${errors.senderNumber ? 'input-error' : 'input-info'} w-full`}
            defaultValue=""
            {...register("senderNumber", { required: true, pattern: /^[0-9]{10,12}$/ })}
          />
          {errors.senderNumber && <span className="text-red-500">Valid phone number is required</span>}
        </div>
      </div>
      {/* email body */}
      <div className="w-[100%] grid text-start">
        <span>your message</span>
        <textarea
          placeholder="Write your message here"
          name="emailBody"
          className={`mt-2 input input-bordered textarea textarea-info ${errors.emailBody ? 'input-error' : 'input-info'} w-full`}
          defaultValue=""
          {...register("emailBody", { required: true })}
        ></textarea>
        {errors.emailBody && <span className="text-red-500">Email body is required</span>}
      </div>

      <button className='btn bg-blue-800 text-white text-xl hover:bg-blue-500 hover:text-black my-4' type='submit'>Send Email</button>
    </form>
  )
}

export default Connaction
