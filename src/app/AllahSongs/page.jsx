"use client";
import React, { useState, useRef } from "react";
import DashboardComponent from "../DashboardComponent/page";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaPlay, FaPause } from "react-icons/fa6";

const audios = [
  {
    id: 1,
    img: "/images/allahlogo.jpg",
    title: "Awari__Ek_Villain",
    audioSrc: "/music/Monema-Mustehsan/Awari_Full_Video_Song___Ek_Villain___Sidharth_Malhotra___Shraddha_Kapoor(0).m4a",
  },
  {
    id: 2,
    img: "/images/allahlogo.jpg",
    title: "Beparwah___",
    audioSrc: "/music/Monema-Mustehsan/Coke_Studio___Season_14___Beparwah___Momina_Mustehsan(128k).m4a",
  },
  {
    id: 3,
    img: "/images/allahlogo.jpg",
    title: "Afreen_Afreen__",
    audioSrc: "/music/Monema-Mustehsan/Coke_Studio_Season_9__Afreen_Afreen__Rahat_Fateh_Ali_Khan___Momina_Mustehsan(0).m4a",
  },
  {
    id: 4,
    img: "/images/allahlogo.jpg",
    title: "Main_Raasta__",
    audioSrc: "/music/Monema-Mustehsan/Coke_Studio_Season_9__Main_Raasta__Momina_Mustehsan___Junaid_Khan(0).m4a",
  },
  {
    id: 5,
    img: "/images/allahlogo.jpg",
    title: "Tera_Woh_Pyar",
    audioSrc: "/music/Monema-Mustehsan/Coke_Studio_Season_9__Tera_Woh_Pyar__Momina_Mustehsan___Asim_Azhar(128k).m4a",
  },
  {
    id: 6,
    img: "/images/allahlogo.jpg",
    title: "Ghoom_Taana__Ta-Na-NA",
    audioSrc: "/music/Monema-Mustehsan/Coke_Studio_Season_10__Ghoom_Taana__Momina_Mustehsan___Irteassh(0).m4a",
  },
  {
    id: 7,
    img: "/images/allahlogo.jpg",
    title: "Ko_Ko_Korina__",
    audioSrc: "/music/Monema-Mustehsan/Coke_Studio_Season_11__Ko_Ko_Korina__Ahad_Raza_Mir___Momina_Mustehsan(0).m4a",
  },
  {
    id: 8,
    img: "/images/allahlogo.jpg",
    title: "Mahi_Aaja_Hor-Na",
    audioSrc: "/music/Monema-Mustehsan/Coke_Studio_Season_11__Mahi_Aaja__Asim_Azhar_and_Momina_Mustehsan(0).m4a",
  },
  {
    id: 9,
    img: "/images/allahlogo.jpg",
    title: "Roye_Roye_Neenon",
    audioSrc: "/music/Monema-Mustehsan/Coke_Studio_Season_11__Roye_Roye__Sahir_Ali_Bagga_and_Momina_Mustehsan(0).m4a",
  },
  {
    id: 10,
    img: "/images/allahlogo.jpg",
    title: "Hamesha_kee_Trha",
    audioSrc: "/music/Monema-Mustehsan/Hamesha___Uzair_Jaswal,_Momina_Mustehsan(0).m4a",
  },
  {
    id: 11,
    img: "/images/allahlogo.jpg",
    title: "Tera_Woh_Pyar",
    audioSrc: "/music/Monema-Mustehsan/Tera_Woh_Pyar__Nawazishein_Karam_(128k).m4a",
  }, {
    id: 12,
    img: "/images/allahlogo.jpg",
    title: "Yaariyan__acoustic",
    audioSrc: "/music/Monema-Mustehsan/Yaariyan__acoustic____Momina_Mustehsan(0).m4a",
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
          <h2 className=" font-semibold">12 Songs</h2>
        </div>
        <div>
          <img
            className=" rounded-md w-full sm:h-full md:h-[400px]"
            src="/images/allahimg.png"
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
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-1 md:p-2 rounded-full focus:outline-none focus:shadow-outline"
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
