import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import UseOneBlog from "../../../../hooks/useOneBlog";
import axios from "axios";
import { img_hoting_api } from "../updateProject";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const BlogUpdate = () => {
  const id = useLoaderData();
  const [oneBlog, isLoading, refetch] = UseOneBlog(id);
  const formData = new FormData();
  const axiosPublice= useAxiosPublic();
  // console.log(oneBlog)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit =async(data) => {
    console.log(data);
    formData.append("image", data.image[0]);
    const res = await axios.post(img_hoting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }})
      if(res.data.success){
        const imgHostURL = { img_hoting_URL: res.data.data.url};
        console.log(imgHostURL)
      const updateRes = await axiosPublice.put(
        `/blog/${oneBlog._id}`,
        { ...data, ...imgHostURL}
      );
      console.log(updateRes.data);
    }
      // console.log(res)
  };
  if (isLoading) {
    return <p>Loading......</p>;
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
              defaultValue={oneBlog?.title}
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
              defaultValue={oneBlog?.description}
              className={`mt-2 input input-bordered ${errors.description ? "input-error" : "input-info"} w-full`}
              {...register("description", {
                required: true,
              })}
            />
            {errors.description && <span className="text-red-500"></span>}
          </div>
        </div>
      </div>
      {/* tags of this blog */}
      {/* <div className="flex gap-2">
        <input type="checkbox" id="HTML" name="HTML" value="HTML" />
        <label for="HTML"> HTML</label>
        
        <input type="checkbox" id="CSS" name="CSS" value="CSS" />
        <label for="CSS"> CSS</label>
        
        <input type="checkbox" id="JAVASCRIPT" name="JAVASCRIPT" value="JAVASCRIPT" />
        <label for="JAVASCRIPT"> JAVASCRIPT</label>

        <input type="checkbox" id="REACT" name="REACT" value="REACT" />
        <label for="REACT"> REACT</label>
        
      </div> */}

      <div className="flex gap-6">
        <label className="block mb-1">Home page Image</label>
        <input
          // defaultValue={projectsDetails.homepage_img || ""}
          type="file"
          className="file-input w-full max-w-xs"
          {...register("image", { required: true })}
        />
        {errors.image && (
          <span className="text-red-500">Image is required</span>
        )}
        <p>you have use thous tags-</p>
        <ul className="flex gap-6 list-disc marker:text-blue-600">
          <li>{oneBlog.tags[0]}</li>
          <li>{oneBlog.tags[1]}</li>
          <li>{oneBlog.tags[2]}</li>
        </ul>
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
