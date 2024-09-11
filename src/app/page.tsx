import React from "react";
import Navbar from "./component/navbar/Page";
import Dashboard from "./dashboard/Dashboard";
import Videos from "./component/videos/Videos";
import MySwiper from './mySwiper/MySwiper'
import AudioSlider from './AudioSlider/AudioSlider'
import Footer from './Footer/page'
import VideoAlbum from './VideoAlbum/page'
import ShortVideos from './ShortVideos/page'
import DashboardComponent from "./DashboardComponent/page";

const page = () => {
  return (
    <DashboardComponent>
    <div>
      {/* <Dashboard /> */}
      <VideoAlbum/>
      <ShortVideos/>
      <MySwiper/>
      <AudioSlider/>
      <Videos />
      <Footer/>
    </div>
    </DashboardComponent>
  );
};

export default page;
