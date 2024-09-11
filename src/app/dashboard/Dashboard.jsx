import React from "react";
import DashboardComponent from "../DashboardComponent/page";


const Page = () => {
  return (
    <DashboardComponent>
    <div className=" flex justify-center items-center flex-col h-full w-full border-l mb-0.5">
        <h1 className=" md:text-4xl font-bold mb-3">
          Welcome to My Music Website
        </h1>
        <p className="mb-4 text-2xl w-[550px] text-center">
          Explore the latest songs, discover new artists, and create your own
          playlists.
        </p>
    </div>
    </DashboardComponent>

  );
};
export default Page;
