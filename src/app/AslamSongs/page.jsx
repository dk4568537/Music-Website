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
    img: "/images/aslamlogo.webp",
    title: "Aeda_Pandh_Kaya_Thayee",
    audioSrc: "/music/Aslam-faqeer/Aeda_Pandh_Kaya_Thayee___Aslam_Faqeer___Album_03___Bahar_Gold Production(128k).m4a",
  },
  {
    id: 2,
    img: "/images/aslamlogo.webp",
    title: "Inhan_Pattan_Tay",
    audioSrc: "/music/Aslam-faqeer/Inhan_Pattan_Tay___Aslam_Faqeer___Album_03___Bahar_Gold Production(128k).m4a",
  },
  {
    id: 3,
    img: "/images/aslamlogo.webp",
    title: "Ishq_Khan_Azad_Aheen",
    audioSrc: "/music/Aslam-faqeer/Ishq_Khan_Azad_Aheen__Aslam_Faqeer_Album_03_Bahar_Gold_Production_(128k).m4a",
  },
  {
    id: 4,
    img: "/images/aslamlogo.webp",
    title: "Jeejal_Taan_Sadqe_Jaan",
    audioSrc: "/music/Aslam-faqeer/Jeejal_Taan_Sadqe_Jaan___Aslam_Faqeer___Album_03___Bahar_Gold Production(128k).m4a",
  },
  {
    id: 5,
    img: "/images/aslamlogo.webp",
    title: "jhopan_Main_Kiyen_Rahande",
    audioSrc: "/music/Aslam-faqeer/jhopan_Main_Kiyen_Rahande___Aslam_Faqeer___Album_03___Bahar_Gold Production__(128k).m4a",
  },
  {
    id: 6,
    img: "/images/aslamlogo.webp",
    title: "Lagi_Pahinjan_Maan",
    audioSrc: "/music/Aslam-faqeer/Lagi_Pahinjan_Maan___Aslam_Faqeer___Album_03___Bahar_Gold Production(128k).m4a",
  },
  {
    id: 7,
    img: "/images/aslamlogo.webp",
    title: "Muhinji_Agyan_Langheen_Tho",
    audioSrc: "/music/Aslam-faqeer/Muhinji_Agyan_Langheen_Tho___Aslam_Faqeer___Album_03___Bahar_Gold Production(128k).m4a",
  },
  {
    id: 8,
    img: "/images/aslamlogo.webp",
    title: "Pahadan_Tay_Pair_Rakhi",
    audioSrc: "/music/Aslam-faqeer/Pahadan_Tay_Pair_Rakhi___Aslam_Faqeer___Album_03___Bahar_Gold Production(128k).m4a",
  },
  {
    id: 9,
    img: "/images/aslamlogo.webp",
    title: "Rusan_Maan_Mile_Cha",
    audioSrc: "/music/Aslam-faqeer/Rusan_Maan_Mile_Cha___Aslam_Faqeer___Album_03___Bahar_Gold Production(128k).m4a",
  },
  {
    id: 10,
    img: "/images/aslamlogo.webp",
    title: "Sikk_Tuhinji",
    audioSrc: "/music/Aslam-faqeer/Sikk_Tuhinji___Aslam_Faqeer___Album_03___Bahar_Gold Production(128k).m4a",
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
      <div className=" pt-10 grid grid-cols-1 md:grid-cols-2 items-center gap-3 p-2">
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
            src="/images/Aslamimg.jpg"
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
