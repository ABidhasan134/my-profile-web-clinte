import React from 'react'
import { useForm } from "react-hook-form";

const Connaction = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

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
        <span>Email body</span>
        <textarea
          placeholder="Write your email here"
          name="emailBody"
          className={`mt-2 input input-bordered textarea textarea-info ${errors.emailBody ? 'input-error' : 'input-info'} w-full`}
          defaultValue=""
          {...register("emailBody", { required: true })}
        ></textarea>
        {errors.emailBody && <span className="text-red-500">Email body is required</span>}
      </div>

      <button className='btn bg-blue-800 text-white text-3xl hover:bg-blue-500 hover:text-black my-4' type='submit'>Send Email</button>
    </form>
  )
}

export default Connaction
