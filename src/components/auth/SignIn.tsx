import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { LinkedinIcon } from "lucide-react";
import { Linkedin } from "lucide-react";

const SignIn = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(form);
  };

  const handleOAuth = (provider: string) => {
    // Handle OAuth here
    console.log(`Signing up with ${provider}`);
  };

  return (
    <div className="flex flex-col items-center justify-center ">

      <div className="bg-white">

      <h1 className="text-4xl font-bold text-blue-700 mb-5 bg-blue-200 w-80 text-center py-3 rounded-s-md">
        Sign In Here
      </h1>

      <form onSubmit={handleSubmit} className="w-80 space-y-8">
        <input
          type="text"
          name="username"
          placeholder="Username or Email"
          onChange={handleChange}
          className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
    
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
        
        <Link href="/forgot-password" className="text-blue-500 hover:underline text-start mt-4 ml-2">
          Forgot Password?
        </Link>

        <button
          type="submit"
          className="w-full px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
        >
        <div className="flex items-center justify-center hover:gap-3">
              Sign In 
              <ArrowRight className="w-5"/>       
         </div>
        </button>

        <p className="text-center text-gray-500">or Sign In with</p>

        <div className="flex items-center justify-between flex-col gap-5">
          <button
            onClick={() => handleOAuth("LinkedIn")}
            className="flex items-center justify-center w-full px-3 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-600"
          >
            
            <Image
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
            alt="Icon"
            width={25}
            height={25}
            >
            </Image>
            <span className="mx-2 ">LinkedIn</span>
          </button>
          <button
            onClick={() => handleOAuth("GitHub")}
            className="flex items-center justify-center w-full px-3 py-2 text-white bg-black rounded-md hover:bg-gray-600"
          >
            <Image
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Icon"
            width={25}
            height={25}
            className="bg-white rounded-2xl ml-2">
            </Image>
            <span className="ml-2">GitHub</span>
          </button>
          <button
            onClick={() => handleOAuth("Google")}
            className="text-extrabold flex items-center justify-center w-full px-3 py-2 text-black border-2 border-black  rounded-md hover:bg-slate-200  bg-white"
          >
            <Image
            src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"
            alt="Icon"
            width={23}
            height={23}
            className=" ml-2">
            </Image>
            <span className="ml-2">Google</span>
          </button>
        </div>
      </form>

      
      </div>
      
    </div>
  );
};

export default SignIn;
