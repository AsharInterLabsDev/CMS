"use client";
import { API } from "@/API";
import React, { useState } from "react";

const CreateGallery = () => {
  const [images, setImages] = useState(null);
  const [formState, setFormState] = useState({
    title: "",
    description: "",
  });
  const getImages = (e) => {
    const file = e.target.files[0];
    setImages(file);
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!images) {
      console.error("Image missing");
      return;
    }

    try {
        if (!images) {
            console.error("Image missing");
            return;
        }

      const formData = new FormData();

      formData.append("image", images);
      
      const res = await API.createGalleries(formData);

      console.log(":", res)
       
      let image = res.data.data.imageUrl;

      console.log("image: ", image)

      const { title, description } = formState;
      
      const data = {
        title,
        description,
        image,
      };

      console.log("data: ", data)
      
      const resp = await API.CreateSpotlights(data);
      console.log(resp.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  console.log("title", formState);
  return (
    <>
      <div className="py-10 ">
        <a
          href="/dashboard/galleries"
          class="inline-block rounded bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Back
        </a>
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
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
            <div className="text-left">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full rounded-lg p-3 text-sm"
                onChange={(e) => {
                  setFormState({ ...formState, title: e.target.value });
                }}
              />
            </div>
            <div className="mt-4">
              <textarea
                name="description"
                id="decription"
                cols="30"
                rows="5"
                className="w-full"
                onChange={(e) => {
                  setFormState({ ...formState, description: e.target.value });
                }}
              ></textarea>
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
