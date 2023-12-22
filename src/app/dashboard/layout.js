'use client'
import Gallery from "@/components/Gallery";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { useState } from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {

const [show , setShow]=useState(false)


  return (
    <section className="flex items-start ">
      {/* Include shared UI here e.g. a header or sidebar */}

      <Sidebar show={show} setShow={setShow} />
        <div onClick={()=>setShow(prev => !prev)} className={`${show ? ' block' : 'lg:hidden'}   text-red-900"`}>Menu</div>
      <div className={` ${show ? "ml-[0px]" : "lg:ml-[250px] "} flex-1 lg:block `}>{children}</div>
      
    </section>
  );
}
