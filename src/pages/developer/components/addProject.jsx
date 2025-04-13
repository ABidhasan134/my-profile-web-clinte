import React from 'react'
import { useForm } from 'react-hook-form';

const AddProject = () => {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit=(data)=>{
      console.log(data)
    }
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 1st row of addproject*/}
    <div>
      <div className="flex gap-2 justify-center my-4">
          <div className="w-[50%] grid text-start">
            <span>project Category</span>
            <input
              type="text"
              name="project_category"
              placeholder="Enter your project category"
              className={`mt-2 input input-bordered ${errors.project_category ? "input-error" : "input-info"} w-full`}
              {...register("project_category", {
                required: true,
                minLength: 3,
              })}
            />
            {errors.project_category && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          {/* sender phone number */}
          <div className="w-[50%] grid text-start">
            <span>Your phone project Namer</span>
            <input
              type="text"
              name="project_name"
              placeholder="Enter your project Name"
              className={`mt-2 input input-bordered ${errors.project_name ? "input-error" : "input-info"} w-full`}
              {...register("project_name", {
                required: true,
              })}
            />
            {errors.project_name && (
              <span className="text-red-500">
                Valid project_name number is required
              </span>
            )}
          </div>
        </div>
    </div>
            {/* 2nd row of the update project */}
        <div className="flex gap-2 justify-center my-4">
          <div className="w-[50%] grid text-start">
            <span>project Sort Discription</span>
            <input
              type="text"
              name="project_sort_discription"
              placeholder="project Sort Discription"
              className={`mt-2 input input-bordered ${errors.project_sort_discription ? "input-error" : "input-info"} w-full`}
              {...register("project_sort_discription", {
                required: true,
                minLength: 10,
              })}
            />
            {errors.project_sort_discription && (
              <span className="text-red-500">
                short discription is required
              </span>
            )}
          </div>
          <div className="w-[50%] grid text-start">
            <span>project Long Discription</span>
            <input
              type="text"
              name="project_long_discription"
              placeholder="Enter your project project Long Discription"
              className={`mt-2 input input-bordered ${errors.project_long_discription ? "input-error" : "input-info"} w-full`}
              {...register("project_long_discription", {
                required: true,
                minLength: 20,
              })}
            />
            {errors.project_long_discription && (
              <span className="text-red-500">
                Valid project Long Discription is required
              </span>
            )}
          </div>
        </div>
    <button
          className="btn bg-blue-800 text-white text-xl hover:bg-blue-500 hover:text-black my-4"
          type="submit"
        >
          Add Project
        </button>
    </form>
  )
}

export default AddProject
