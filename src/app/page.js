"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/API";

export default function Home() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const updateForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async  (e) => {
    e.preventDefault();
    console.log(formData);
    if(formData.email && formData.password){
      const res = await API.Login(formData);
      console.log(res.data.status.success);
      if(res.data.status.success) router.push('/dashboard');
    }else{
      alert('Please fill all field!');
    }
    
  };
  return (
    <main className="container mx-auto px-5">
      {/* <div>
        <p classNameName="text-4xl">Sign In</p>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label
              htmlFor="email"
              classNameName="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              onChange={updateForm}
              value={formData.email}
              classNameName="outlined-none font-medium focus:outline-none py-2 pl-3 text-gray-700 border border-red-400"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label
              htmlFor="pass"
              classNameName="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={updateForm}
              value={formData.password}
              classNameName="outlined-none focus:outline-none pl-3 py-2 font-medium text-gray-700 border border-red-400"
              placeholder="Enter password"
            />
          </div>
          <button>Submit</button>
        </form>
      </div> */}
      

<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-[10%]">
  <div className="mx-auto max-w-lg text-center">
    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

    <p className="mt-4 text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
      ipsa culpa autem, at itaque nostrum!
    </p>
  </div>

  <form onSubmit={handleFormSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      <label for="email" className="sr-only">Email</label>

      <div className="relative">
        <input
          type="email" onChange={updateForm} value={formData.email} name="email"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter email"
        />

        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>

    <div>
      <label for="password" className="sr-only">Password</label>

      <div className="relative">
        <input
          type="text" onChange={updateForm} value={formData.password} name="password"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter password"
        />

        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </span>
      </div>
    </div>

    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500">
        No account?
        <a className="underline" href="">Sign up</a>
      </p>

      <button
        type="submit"
        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>
    </div>
  </form>
</div>
    </main>
  );
}
