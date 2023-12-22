'use client'
import { API } from '@/API'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Tables from '@/components/Tables'

const Page = () => {
  const [id, setId] = useState("");
  const [imageMap, setImageMap]=useState([])
useEffect(()=>{
  const fetchData=async()=>{
    const res = await API.getaccessgalleries();
console.log(res.data)
setImageMap(res?.data?.data)
  }
fetchData();
},[id])
useEffect(() => {
  const fetchData = async () => {
    const resp = await API.deleteaccessgalleries(id);
    // console.log(resp.data, "id");
    //  setImageMaps(res?.data?.data)
  };
  fetchData();
}, [id]);
  return (
    <div className=' px-3 '>
    <section>
 <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
   <header className="text-center">
     <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Access Gallerries </h2>

     <p className="mx-auto mt-4 max-w-md text-gray-500">
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
       dicta incidunt est ipsam, officia dolor fugit natus?
     </p>
   </header>
<div className='py-10 '>
<Tables imageMap={imageMap} setId={setId} id={id} />
</div>
   
 </div>
</section>

    </div>
  )
}

export default Page