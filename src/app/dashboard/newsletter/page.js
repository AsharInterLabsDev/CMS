'use client'
import { API } from '@/API';
import Tables from '@/components/Tables'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [id, setId] = useState("");
  const [imageMap, setImageMap] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await API.GetNewsletter();
      console.log(res.data);
      setImageMap(res?.data?.data);
    };
    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await API.deleteNewsletter(id);
      console.log(resp.data);
      //  setImageMaps(res?.data?.data)
    };
    fetchData();
  }, [id]);
  
  return (
    <div className=" px-3 ">
    <section>
      <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Newsletter
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <div className="py-10">
          <a
            href="/dashboard/newsletter/create-newsletter"
            class="inline-block rounded bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Create
          </a>
        </div>
        <Tables imageMap={imageMap} setId={setId} id={id} />
      </div>
    </section>
  </div>
  )
}

export default Page