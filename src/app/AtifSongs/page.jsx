"use client";
import React, { useState, useRef } from "react";
import DashboardComponent from "../DashboardComponent/page";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaPlay, FaPause } from "react-icons/fa6";

const audios = [
  {
    id: 1,
    img: "/images/atiflogo.jpg",
    title: "Latest_Hindi_",
    audioSrc: "/music/Atif-Aslam/Atif_Aslam__Pehli_Dafa_Song__Video____Ileana_D’Cruz___Latest_Hindi_Song_2017___T-Series(128k).m4a",
  },
  {
    id: 2,
    img: "/images/atiflogo.jpg",
    title: "Pehli_Dafa",
    audioSrc: "/music/Atif-Aslam/Best_Of_Atif_Aslam_Popular_Songs_Top_10_Songs_Jukebox_Atif_Aslam_Hit_Songs_2024___LIVE_STERAM(128k).m4a",
  },
  {
    id: 3,
    img: "/images/atiflogo.jpg",
    title: "Dil_Diyan_Gallan_",
    audioSrc: "/music/Atif-Aslam/Dil_Diyan_Gallan_Song___Tiger_Zinda_Hai___Salman_Khan,_Katrina_Kaif___Atif_Aslam___Vishal___Shekhar(128k).m4a",
  },
  {
    id: 4,
    img: "/images/atiflogo.jpg",
    title: "Pehli_Nazar_Mein_Kaise",
    audioSrc: "/music/Atif-Aslam/Pehli_Nazar_Mein_Kaise_Jaado_Kar_Diya___Atif_Aslam_Hits___Race_I_Akshaye,_Bipasha___Saif_Ali(128k).m4a",
  },
  {
    id: 5,
    img: "/images/atiflogo.jpg",
    title: "Rafta_Rafta_-_Official",
    audioSrc: "/music/Atif-Aslam/Rafta_Rafta_-_Official_Music_Video___Raj_Ranjodh___Atif_Aslam_Ft._Sajal_Ali___Tarish_Music(128k).m4a",
  },
  {
    id: 6,
    img: "/images/atiflogo.jpg",
    title: "ere_Bin_x_Sajni",
    audioSrc: "/music/Atif-Aslam/Tere_Bin_x_Sajni__Shubhadip_Dey___@Vibevik_Mashup____Full_Version___Atif_Aslam___Arijit_Singh(128k).m4a",
  },
  {
    id: 7,
    img: "/images/atiflogo.jpg",
    title: "Humayun_Saeed,_Yumna",
    audioSrc: "/music/Atif-Aslam/Tumhari_Chup___Gentleman___Atif_Aslam__Humayun_Saeed,_Yumna_Zaidi,_Zahid_ahmed__New_Song___Sufiscore(128k).m4a",
  },
  {
    id: 8,
    img: "/images/atiflogo.jpg",
    title: "Tumhari_Chup__From",
    audioSrc: "/music/Atif-Aslam/Tumhari_Chup__From__Gentleman__(128k).m4a",
  },
  {
    id: 9,
    img: "/images/atiflogo.jpg",
    title: "Tumhari_Chup__Lyrics",
    audioSrc: "/music/Atif-Aslam/Tumhari_Chup__Lyrics__Atif_Aslam___Humayun_Saeed___Yumna_Zaidi___Zahid_Ahmed___Gentleman_Drama_Song(128k).m4a",
  },
];

const Page = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayerRef = useRef(null);

  const handlePlayClick = (audioSrc) => {
    if (currentAudio === audioSrc) {
      if (isPlaying) {
        audioPlayerRef.current.audio.current.pause();
      } else {
        audioPlayerRef.current.audio.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentAudio(audioSrc);
      setIsPlaying(true);
    }
  };

  return (
    <DashboardComponent>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 items-center gap-3 px-2">
        <div className=" text-2xl font-sans font-semibold mb-4">
          <h2 className=" capitalize ">top 10 hits</h2>
          <p className=" capitalize">trending songs</p>
        </div>
        <div className=" flex justify-between items-center pr-4 mb-4">
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-2 rounded-full focus:outline-none focus:shadow-outline"
            onClick={() => handlePlayClick(null)}
          >
            {isPlaying ? (
              <FaPause className="text-white text-3xl" />
            ) : (
              <FaPlay className="text-white text-3xl" />
            )}
          </button>
          <h2 className=" font-semibold">9 Songs</h2>
        </div>
        <div>
          <img
            className=" rounded-md w-full sm:h-full md:h-[400px]"
            src="/images/atifimg.jpg"
            alt=""
          />
        </div>

        <div className=" h-[390px] w-auto overflow-auto touch-pan-y">
          {audios.map((audio) => (
            <div
              key={audio.id}
              className="flex justify-between items-center mb-4 mr-1 shadow-md bg-white text-black p-2"
            >
              <div className="flex gap-5 items-center">
                <p>{audio.id}st</p>
                <img
                  src={audio.img}
                  alt={audio.title}
                  className="w-12 h-12 object-cover"
                />
                <h3 className="text-xl font-bold">{audio.title}</h3>
              </div>
              <div>
                <button
                  type="button"
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-2 rounded-full focus:outline-none focus:shadow-outline"
                  onClick={() => handlePlayClick(audio.audioSrc)}
                >
                  {currentAudio === audio.audioSrc && isPlaying ? (
                    <FaPause className="text-white text-3xl" />
                  ) : (
                    <FaPlay className="text-white text-3xl" />
                  )}
                </button>
              </div>
            </div>
          ))}
          {currentAudio && (
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800">
              <H5AudioPlayer
                ref={audioPlayerRef}
                src={currentAudio}
                autoPlay
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full shadow-md"
              />
            </div>
          )}
        </div>
      </div>
    </DashboardComponent>
  );
};

export default Page;
