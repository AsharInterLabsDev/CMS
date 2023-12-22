import { API } from '@/API';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Page = () => {
    const router = useRouter();
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [stringImage, setStrigImage] = useState("");
    const [description, setDescription] = useState("");
  
    const getImages = (e) => {
      const file = e.target.files[0];
      setStrigImage(file);
    };
    // console.log(stringImage);
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!stringImage || !title || !description) {
        console.error("No image selected");
        return;
      }
      try {
        if (stringImage) {
          if (!stringImage) {
            console.error("No image selected");
            return;
          }
  
          const formData = new FormData();
          formData.append("image", stringImage);
  
          const resp = await API.createGalleries(formData);
          // console.log(resp.data.data.imageUrl);
          setImage(resp.data.data.imageUrl);
          let image = resp.data.data.imageUrl;
          // console.log(image);
          const resps = await API.createevents({ image, title, description });
          console.log(resps.data.status.success);
          if (resps.data.status.success === true) {
            toast.success("Create Successfully!");
            setTimeout(()=>{
              router.push("/dashboard/newsletter");
            },3000)
          } else {
            toast.error("Something went wrong!");
          }
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
  
  return (
    <div className="py-10 container mx-auto">
        <a
          href="/dashboard/newsletter"
          class="my-10 min-w-[100px] text-lg text-center inline-block rounded bg-indigo-600 px-3 py-2 font-medium text-white hover:bg-indigo-700"
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
                onChange={(e) => setTitle(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
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
  )
}

export default Page