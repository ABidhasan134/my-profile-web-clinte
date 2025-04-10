import React from "react";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useOneProject from "../../../hooks/useOneProject";
import axios from "axios";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const IMG_HOSTING_KEY = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hoting_api = `https://api.imgbb.com/1/upload?key=${IMG_HOSTING_KEY}`;

const UpdateProject = () => {
  const id = useLoaderData();
  const [projectsDetails, isLoading, refetch] = useOneProject(id);
  const axiosPublice=useAxiosPublic();
  const formData = new FormData();
  // console.log(projectsDetails);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    formData.append("image", data.image[0]);
    const res = await axios.post(img_hoting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }})
      // console.log(res.data.data.url)
      if(res.data.success){
        const imgHostURL = { img_hoting_URL: res.data.data.url};
        console.log(imgHostURL)
      const updateRes = await axiosPublice.put(
        `/projects/${projectsDetails._id}`,
        { ...data, ...imgHostURL}
      );
      console.log(updateRes.data);
      }

    console.log("This is from the update", res);
  };
  // console.log(id);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 1st row of the update project */}
        <div className="flex gap-2 justify-center my-4">
          <div className="w-[50%] grid text-start">
            <span>project Category</span>
            <input
              type="text"
              name="project_category"
              placeholder="Enter your project category"
              className={`mt-2 input input-bordered ${errors.project_category ? "input-error" : "input-info"} w-full`}
              defaultValue={projectsDetails?.project_category || ""}
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
              defaultValue={projectsDetails.project_name || ""}
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

        {/* 2nd row of the update project */}
        <div className="flex gap-2 justify-center my-4">
          <div className="w-[50%] grid text-start">
            <span>project Sort Discription</span>
            <input
              type="text"
              name="project_sort_discription"
              placeholder="project Sort Discription"
              className={`mt-2 input input-bordered ${errors.project_sort_discription ? "input-error" : "input-info"} w-full`}
              defaultValue={projectsDetails.project_sort_discription || ""}
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
              defaultValue={projectsDetails.project_long_discription || ""}
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
        {/* 3rd row of the update project */}
        <div className="flex gap-2 justify-center my-4">
          <div className="w-[50%] grid text-start">
            <span>live Link</span>
            <input
              type="url"
              name="live_link"
              placeholder="project live_link"
              className={`mt-2 input input-bordered ${errors.live_link ? "input-error" : "input-info"} w-full`}
              defaultValue={projectsDetails.live_link || ""}
              {...register("live_link", {
                required: true,
                pattern:
                  /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/([\w#!:.?+=&%@!\-/])*)?$/,
              })}
            />
            {errors.live_link && (
              <span className="text-red-500">Live Link is required</span>
            )}
          </div>
          <div className="w-[50%] grid text-start">
            <span>repository Link</span>
            <input
              type="text"
              name="repository_link"
              placeholder="Enter your repository Link"
              className={`mt-2 input input-bordered ${errors.repository_link ? "input-error" : "input-info"} w-full`}
              defaultValue={projectsDetails.repository_link || ""}
              {...register("repository_link", { required: true })}
            />
            {errors.repository_link && (
              <span className="text-red-500">
                Valid project repository Link is required
              </span>
            )}
          </div>
        </div>
        {/* 4th row of the update project */}
        <div className="flex gap-2 justify-center my-4">
          <div className="w-[50%] grid text-start">
            <span>ficture1</span>
            <input
              type="text"
              name="ficture1"
              placeholder="project ficture1"
              className={`mt-2 input input-bordered ${errors.ficture1 ? "input-error" : "input-info"} w-full`}
              defaultValue={projectsDetails?.ficture[0] || ""}
              {...register("ficture1", { required: true })}
            />
            {errors.ficture1 && (
              <span className="text-red-500">ficture1 is required</span>
            )}
          </div>
          <div className="w-[50%] grid text-start">
            <span>ficture2</span>
            <input
              type="text"
              name="ficture2"
              placeholder="Enter your repository Link"
              className={`mt-2 input input-bordered ${errors.ficture2 ? "input-error" : "input-info"} w-full`}
              defaultValue={projectsDetails?.ficture[1] || ""}
              {...register("ficture2", {
                required: true,
              })}
            />
            {errors.ficture2 && (
              <span className="text-red-500">
                Valid project repository Link is required
              </span>
            )}
          </div>
        </div>
        {/* 5th row of the update project */}
        <div className="flex gap-2 justify-center my-4">
          <div className="w-[50%] grid text-start">
            <span>ficture3</span>
            <input
              type="text"
              name="ficture3"
              placeholder="project ficture3"
              className={`mt-2 input input-bordered ${errors.ficture3 ? "input-error" : "input-info"} w-full`}
              defaultValue={projectsDetails?.ficture[2] || ""}
              {...register("ficture3", { required: true })}
            />
            {errors.ficture3 && (
              <span className="text-red-500">ficture3 is required</span>
            )}
          </div>
          <div className="w-[50%] grid text-start">
            <span>ficture4</span>
            <input
              type="text"
              name="ficture4"
              placeholder="Enter your repository Link"
              className={`mt-2 input input-bordered ${errors.ficture4 ? "input-error" : "input-info"} w-full`}
              defaultValue={projectsDetails?.ficture[3] || ""}
              {...register("ficture4", {
                required: true,
              })}
            />
            {errors.ficture4 && (
              <span className="text-red-500">ficture4 is required</span>
            )}
          </div>
        </div>
        {/* 6th row of the update project */}

        <div className="flex gap-2 justify-center my-4">
          <div className="w-[50%] grid text-start">
            <span>ficture5</span>
            <input
              type="text"
              name="ficture5"
              placeholder="project ficture5"
              className={`mt-2 input input-bordered ${errors.ficture5 ? "input-error" : "input-info"} w-full`}
              defaultValue={projectsDetails?.ficture[4] || ""}
              {...register("ficture5", { required: true })}
            />
            {errors.ficture5 && (
              <span className="text-red-500">ficture5 is required</span>
            )}
          </div>
          <div className="w-[50%] grid text-start">
            <span>project Motivation</span>
            <input
              type="text"
              name="project_motivation"
              placeholder="Enter your repository Link"
              className={`mt-2 input input-bordered ${errors.project_motivation ? "input-error" : "input-info"} w-full`}
              defaultValue={projectsDetails.project_motivation || ""}
              {...register("project_motivation", {
                required: true,
              })}
            />
            {errors.project_motivation && (
              <span className="text-red-500">
                project Motivation is required
              </span>
            )}
          </div>
        </div>
        {/* 7th row of the update project */}
        <div className="flex gap-2 justify-center my-4">
        <div className="w-full md:w-[50%] flex-1">
                        <label className="block mb-1">Home page Image</label>
                        <input
                            // defaultValue={projectsDetails.homepage_img || ""}
                            type="file"
                            className="file-input w-full max-w-xs"
                            {...register("image", { required: true })}
                        />
                        {errors.image && <span className="text-red-500">Image is required</span>}
                    </div>
          <div className="w-[50%] grid text-start">
            
          </div>
        </div>
        <button
          className="btn bg-blue-800 text-white text-xl hover:bg-blue-500 hover:text-black my-4"
          type="submit"
        >
          Update Project
        </button>
      </form>
    </div>
  );
};

export default UpdateProject;
