"use client";
import React, { useState, useRef } from "react";
import DashboardComponent from "../DashboardComponent/page";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaPlay, FaPause } from "react-icons/fa6";
import Image from "next/image";

const audios = [
  {
    id: 1,
    img: "/images/mehaklogo.jpg",
    title: "AA_Dohen_Ral_Ke",
    audioSrc: "/music/Mehak-Malik/AA_Dohen_Ral_Ke_Ay_Wada_Karon___Mehak_Malik___Dance_Performance_Shaheen_Studio_2024(128k).m4a",
  },
  {
    id: 2,
    img: "/images/mehaklogo.jpg",
    title: "Dhola_Sanu_",
    audioSrc: "/music/Mehak-Malik/Dhola_Sanu_Chorya_Haai_Kachi_Sharab_Wango___Mehak_Malik___Dance_Performance_Shaheen_Studio_2024(128k).m4a",
  },
  {
    id: 3,
    img: "/images/mehaklogo.jpg",
    title: "Dil_Ke_Sau_",
    audioSrc: "/music/Mehak-Malik/Dil_Ke_Sau_Tukde_,_Mehak_Malik_Bollywood_Dance_Performance_2024(128k).m4a",
  },
  {
    id: 4,
    img: "/images/mehaklogo.jpg",
    title: "Jogiya___Official",
    audioSrc: "/music/Mehak-Malik/Jogiya___Official_Song___Mehak_Malik___Dance_Performance___Shaheen_Studio(128k).m4a",
  },
  {
    id: 5,
    img: "/images/mehaklogo.jpg",
    title: "Dil_Dhola__",
    audioSrc: "/music/Mehak-Malik/Dil_Dhola___Mehak_Malik___Zakir_Ali_Shaikh___Dance_Performance___Shaheen_Studio(128k).m4a",
  },
  {
    id: 6,
    img: "/images/mehaklogo.jpg",
    title: "Yaar_Chahiday_",
    audioSrc: "/music/Mehak-Malik/Mehak_Malik___Yaar_Chahiday___Dance_Performance___Shaheen_Studio_2023(128k).m4a",
  },
  {
    id: 7,
    img: "/images/mehaklogo.jpg",
    title: "Nak_Da_Koka___",
    audioSrc: "/music/Mehak-Malik/Nak_Da_Koka___Mehak_Malik___Dance_Performance_Shaheen_Studio_2024(128k).m4a",
  },
  {
    id: 8,
    img: "/images/mehaklogo.jpg",
    title: "Sakon_Changa",
    audioSrc: "/music/Mehak-Malik/Mehak_Malik___Sakon_Changa_Tu_Lagnae___New_Dance_2020___Shaheen_Studio(128k).m4a",
  },
  {
    id: 9,
    img: "/images/mehaklogo.jpg",
    title: "Yaar_Chahiday__",
    audioSrc: "/music/Mehak-Malik/Yaar_Chahiday___Mehak_Malik___Dance_Performance_Shaheen_Studio(128k).m4a",
  },
  {
    id: 10,
    img: "/images/mehaklogo.jpg",
    title: "Yaar_ve_terian",
    audioSrc: "/music/Mehak-Malik/Yaar_ve_terian_aa_tasveeran_mehak_malik_dance(128k).m4a",
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
          <h2 className=" font-semibold">10 Songs</h2>
        </div>
        <div>
          <Image
            className=" rounded-md w-full sm:h-full md:h-[400px]"
            src="/images/mehakimg.png"
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
                <Image
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
