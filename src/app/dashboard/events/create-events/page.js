'use client'
import { API } from "@/API";
import React, { useState } from "react";

const Page = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const getImages = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        // event.target.result contains the data URL
        const dataURL = event.target.result;
        setImage(dataURL);
        console.log(dataURL);
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };
console.log(image)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !title || !description) {
      console.error("No image selected");
      return;
    }
    try {
      const resp = await API.createevents({image,title,description});
      console.log(resp.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <div className="py-10 container mx-auto">
        <a
          href="/dashboard/events"
          class="inline-block rounded bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Back
        </a>
        <div className="rounded-lg bg-white p-8 container mx-auto px-5 shadow-lg lg:col-span-3 lg:p-12">
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
            <div>
              <label className="sr-only" htmlFor="message2">
                Title
              </label>
              <input
                type="text"
                name="title"
                onChange={(e)=>setTitle(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Title"
                id="message2"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="message1">
                Description
              </label>
              <input
                type="text"
                name="description"
                onChange={(e)=>setDescription(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Description"
                id="message1"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
