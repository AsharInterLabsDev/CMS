"use client";
import { API } from "@/API";
import React, { useState } from "react";

const CreateGallery = () => {
    
//   const [image, setImage] = useState({});
//   const getImages = (e) => {
//     const { name } = e.target;
//     setImage({ ...image, [name]: e.target.files[0] });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let formData = new FormData();
//     formData?.append("image", image);
//     console.log(formData);
//     console.log(image);
//     const resp = await API.createGalleries(image);
//     console.log(resp.data);
//   };

const [image, setImage] = useState(null);

  const getImages = (e) => {
   
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      console.error("No image selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const resp = await API.createGalleries(formData);
      console.log(resp.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <div className="px-10 ">
      <a
           href="/dashboard/galleries"
           class="my-10 min-w-[100px] text-lg text-center inline-block rounded bg-indigo-600 px-3 py-2 font-medium text-white hover:bg-indigo-700"
           >
            Back
          </a>
        <div className="rounded-lg bg-white shadow-lg lg:col-span-3 p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="message">
                Image
              </label>
              <input
                type="file"
                name="image"
                onChange={getImages}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Message"
                id="message"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateGallery;
