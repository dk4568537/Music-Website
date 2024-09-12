"use client";
import React, { useEffect } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import DashboardComponent from "../DashboardComponent/page";
import Image from "next/image";

const page = () => {
  return (
    <>
      <DashboardComponent>
        <div className="flex justify-center items-centerbg-gray-100">
          <div className="w-full max-w-md gap-x-3 px-2 items-center justify-center flex flex-col">
            <Image
              className="text-2xl w-16 h-16 rounded-full hover:ring-2 hover:ring-black mb-4 mt-2 text-center"
              src="/images/Danesh.jpg"
              alt="Profile"
            />

            <p className="border w-full rounded-md flex">
              <input className="w-full p-3" />
              <button
                type="button"
                className="border-l bg-slate-50 p-3 text-blue-700"
              >
                Change
              </button>
            </p>
            <input className="border p-4 w-full rounded-md mt-3" />
            {/* Add more profile details as needed */}
            {/* <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
              Logout
            </button> */}
            <button className=" w-full py-4 bg-blue-800 hover:bg-blue-700 focus:bg-blue-600 text-gray-100 mt-3 rounded-lg">
              Save Details
            </button>
            <p className=" text-blue-700 text-center pt-3 mb-2">
              Change password
            </p>

            <button className=" w-full flex justify-center items-center gap-5 py-4  hover:bg-blue-700 focus:bg-blue-700 hover:text-gray-100 border mt-3 rounded-lg">
              <FaGoogle className=" text-2xl" />
              Connected with Google
            </button>
            <button className=" w-full flex justify-center items-center gap-3 py-4 bg-blue-800 hover:bg-blue-700 focus:bg-blue-700 text-gray-100 mt-3 rounded-lg">
              <FaFacebookF className=" text-2xl" />
              Connected with Facebook
            </button>
            <button className=" w-full flex justify-center items-center gap-5 py-4 bg-blue-500 hover:bg-blue-700 focus:bg-blue-600 text-gray-100 mt-3 rounded-lg">
              <IoLogoTwitter className=" text-2xl" />
              Connected with Twitter
            </button>
          </div>
        </div>
      </DashboardComponent>
    </>
  );
};

export default page;
