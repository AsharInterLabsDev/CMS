"use client";
import { API } from "@/API";
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';

const CreateGallery = () => {
  
const searchparams =useSearchParams();
const params = searchparams.get("update"); 
// console.log(params)


  const [imageMap, setImageMap] = useState([]);
  const [name, setName] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await API.getcategorygalleries();
      console.log(res.data);
      setImageMap(res?.data?.data);
      const filterData = res?.data?.data.find(g=>g.id === Number(params));
      setName(filterData);
    };
    fetchData();
  }, [params]);

//   console.log( name)

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const resp = await API.updatecategorygallery(params);
      console.log(resp.data);
    } catch (error) {
      console.error("Error updated:", error);
    }
  };

  return (
    <>
      <div className="py-10 ">
      <a
           href="/dashboard/galleries/galleries-categories"
           class="inline-block rounded bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700"
           >
            Back
          </a>
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="message">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name?.name}
                onChange={(e)=>setName({...name , [e.target.name]: e.target.value})}
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateGallery;
