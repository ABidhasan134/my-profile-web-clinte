import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import UseOneBlog from "../../../../hooks/useOneBlog";

const BlogUpdate = () => {
  const id=useLoaderData();
  const [oneBlog,isLoading,refetch]=UseOneBlog(id)
  console.log(oneBlog)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(id);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="flex gap-2 justify-center my-4">
          <div className="w-[50%] grid text-start">
            <span>Blog Title</span>
            <input
              type="text"
              name="title"
              placeholder="Enter your Blog Title"
              className={`mt-2 input input-bordered ${errors.title ? "input-error" : "input-info"} w-full`}
              {...register("title", {
                required: true,
                minLength: 3,
              })}
            />
            {errors.title && (
              <span className="text-red-500">Title is required</span>
            )}
            {/* {errors.title.minLength && (
              <span className="text-red-500">length should be abov 3 charecter</span>
            )} */}
          </div>
          {/* sender phone number */}
          <div className="w-[50%] grid text-start">
            <span>Blog</span>
            <input
              type="text"
              name="description"
              placeholder="wright Blog"
              className={`mt-2 input input-bordered ${errors.description ? "input-error" : "input-info"} w-full`}
              {...register("description", {
                required: true,
              })}
            />
            {errors.description && <span className="text-red-500"></span>}
          </div>
        </div>
      </div>
      <button
        className="btn bg-blue-800 text-white text-xl hover:bg-blue-500 hover:text-black my-4"
        type="submit"
      >
        Update Blog
      </button>
    </form>
  );
};

export default BlogUpdate;
