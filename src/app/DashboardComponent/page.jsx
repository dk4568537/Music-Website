"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";


const DashboardComponent = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSynthwave, setIsSynthwave] = useState(false);
  const [Open, setOpen] = useState(false);

  const ToggleDropdown = () => {
    setOpen(!Open);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Check for saved user theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "synthwave") {
      document.body.classList.add("synthwave");
      setIsSynthwave(true);
    }
  }, []);

  const handleThemeChange = () => {
    if (isSynthwave) {
      document.body.classList.remove("synthwave");
      localStorage.setItem("theme", "default");
    } else {
      document.body.classList.add("synthwave");
      localStorage.setItem("theme", "synthwave");
    }
    setIsSynthwave(!isSynthwave);
  };

  return (
    <>
      <div class="flex h-screen ">
        <div class="hidden md:flex flex-col w-40">
          <div class="flex items-center justify-center h-[50px] ">
            <Link href='/' class=" font-bold hover:text-orange-500 uppercase">musics</Link>
          </div>
          <div class="flex flex-col flex-1 overflow-y-auto">
            <nav class="flex-1 px-2 py-4 ">
              <Link
                href="/"
                class="flex items-center px-4 py-2 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                Dashboard
              </Link>
              { <Link
                href="/AudioSongs"
                class="flex items-center px-4 py-2 mt-2 hover:text-gray-100 hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Audios
              </Link> && (
                 <Link
                 href="/videoSongs"
                 class="flex items-center px-4 py-2 mt-2 hover:text-gray-100 hover:bg-gray-700"
               >
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   class="h-6 w-6 mr-2"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                 >
                   <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M6 18L18 6M6 6l12 12"
                   />
                 </svg>
                 Video
               </Link>
              )}
             
              <a
                href="#"
                class="flex items-center px-4 py-2 mt-2 hover:text-gray-100 hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Settings
              </a>
            </nav>
          </div>
        </div>

        <div class="flex flex-col flex-1 overflow-y-auto">
          <div class='flex items-center justify-between sticky top-0 z-50 bg-[#e0e0e0] text-black'>
            <div class="flex relative items-center py-1 px-4">
              <button
                className=" focus:outline-none hover:ring-2 ring-black hover:ring-gray-200 rounded-md"
                onClick={toggleDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute left-0 top-10 mt-2 w-48 bg-gray-700 text-white rounded-md shadow-lg z-10">
                  <Link
                    href="/videoSongs"
                    className="block px-4 py-2 text-white hover:bg-gray-200 hover:text-black"
                  >
                    Videos
                  </Link>
                  <Link
                    href="/AudioSongs"
                    className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black"
                  >
                    Audios
                  </Link>
                  <Link
                    href="/AllMusic"
                    className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black"
                  >
                    All Music
                  </Link>
                </div>
              )}
              <input
                class="mx-4 w-full text-gray-700 rounded-md px-4 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
            <label className="swap swap-rotate">
              {/* This hidden checkbox controls the state */}
              <input
                type="checkbox"
                id="theme-toggle"
                className="theme-controller"
                checked={isSynthwave}
                onChange={handleThemeChange}
              />

              {/* Sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* Moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost relative btn-circle avatar"
                onClick={ToggleDropdown}
              >
                <div className="w-12 rounded-full pr-2">
                  <img
                    className=" rounded-full ring-2 hover:ring-white"
                    alt="User Avatar"
                    src="/images/Danesh.jpg"
                  />
                </div>
              </div>
              {Open && (
                <div className="absolute right-4 top-10 mt-2 w-48 bg-gray-700 text-white rounded-md shadow-lg z-10">
                  <Link
                    href="/Logout"
                    className="block px-4 py-2 text-white hover:bg-gray-200 hover:text-black"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/Login"
                    className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black"
                  >
                    Login
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black"
                  >
                    Subscribe
                  </Link>
                </div>
              )}
            </div>
          </div>
         {children}
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
