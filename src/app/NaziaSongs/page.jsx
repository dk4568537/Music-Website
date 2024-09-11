"use client";
import React, { useState, useRef } from "react";
import DashboardComponent from "../DashboardComponent/page";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaPlay, FaPause } from "react-icons/fa6";

const audios = [
  {
    id: 1,
    img: "/images/nazialogo.avif",
    title: "BOOM_BOOM",
    audioSrc: "/music/Nazia-Hassan/BOOM_BOOM_-_NAZIA_HASSAN(140).m4a",
  },
  {
    id: 2,
    img: "/images/nazialogo.avif",
    title: "Dil_Ki_Lagi",
    audioSrc: "/music/Nazia-Hassan/Dil_Ki_Lagi_-_Nazia_Hassan(140).m4a",
  },
  {
    id: 3,
    img: "/images/nazialogo.avif",
    title: "Disco_deewane",
    audioSrc: "/music/Nazia-Hassan/nazia___zoheb_hassan-disco_deewane_1980___TV_show(140).m4a",
  },
  {
    id: 4,
    img: "/images/nazialogo.avif",
    title: "Nazia_Hasan_-_Dil",
    audioSrc: "/music/Nazia-Hassan/Nazia_Hasan_-_Dil_Ki_Lagi(140).m4a",
  },
  {
    id: 5,
    img: "/images/nazialogo.avif",
    title: "Nazia_Hassan_-_Aag",
    audioSrc: "/music/Nazia-Hassan/Nazia_Hassan_-_Aag_-_Nazia_Hassan(140).m4a",
  },
  {
    id: 6,
    img: "/images/nazialogo.avif",
    title: "Aankhain_Milaney_Waley",
    audioSrc: "/music/Nazia-Hassan/Nazia_Hassan_-_Aankhain_Milaney_Waley(128k).m4a",
  },
  {
    id: 7,
    img: "/images/nazialogo.avif",
    title: "Dum_Dum_Dee_Dee",
    audioSrc: "/music/Nazia-Hassan/Nazia_Hassan_-_Dum_Dum_Dee_Dee(140).m4a",
  },
  {
    id: 8,
    img: "/images/nazialogo.avif",
    title: "PKabhi_Zindagani_Jaisa",
    audioSrc: "/music/Nazia-Hassan/Nazia_Hassan_-_Kabhi_Zindagani_Jaisa_-_Music_89_PTV(140).m4a",
  },
  {
    id: 9,
    img: "/images/nazialogo.avif",
    title: "KHUSHI_2024__HQ_audio",
    audioSrc: "/music/Nazia-Hassan/nazia_hassan_KHUSHI_1982__HQ_audio(140).m4a",
  },
  {
    id: 10,
    img: "/images/nazialogo.avif",
    title: "/tere_kadmo_ko_choomunga",
    audioSrc: "/music/Nazia-Hassan/tere_kadmo_ko_choomunga__nazia___zoheb_1980_BBC_LIVE___HQ_audio(128k).m4a",
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
          <img
            className=" rounded-md w-full sm:h-full md:h-[400px]"
            src="/images/naziaimg.jpg"
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
