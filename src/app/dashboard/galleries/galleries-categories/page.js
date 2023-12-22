"use client";
import { API } from "@/API";
import Tables from "@/components/Tables";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [id, setId] = useState("");
  const [imageMap, setImageMap] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await API.getcategorygalleries();
      console.log(res.data);
      setImageMap(res?.data?.data);
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await API.deletecategorygalleries(id);
      // console.log(resp.data, "id");
      //  setImageMaps(res?.data?.data)
    };
    fetchData();
  }, [id]);

  // console.log(imageMap);
  return (
    <div className=" px-3 ">
      <section>
        <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Gallerries Categories
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>
          <div className="py-10 px-10">
            <a
              href="/dashboard/galleries/creategallery"
              class="inline-block rounded bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Create
            </a>
          </div>
          <Tables imageMap={imageMap} setId={setId} id={id} />
          {/* <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

     {imageMap.map(gallery => {
       return ( 

       
     <li key={gallery.id}>
       <a href="#" className="group block overflow-hidden border border-red-300 rounded-md">
         
         <Image
           src={gallery.image}
           alt="ad"  width={300} height={300}
           className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
         />

         <div className="relative bg-white pt-3">
           <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
             {gallery.name}
           </h3>

           <p className="mt-2">
             <span className="sr-only"> Regular Price </span>

             <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
           </p>
         </div>
       </a>
     </li>
)
})}
    
   

    
   </ul> */}
        </div>
      </section>
    </div>
  );
};

export default Page;
