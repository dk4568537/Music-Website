"use client";
import React, { useState, useRef } from "react";
import DashboardComponent from "../DashboardComponent/page";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaPlay, FaPause } from "react-icons/fa6";

const audios = [
  {
    id: 1,
    img: "/images/sanamlogo.jpg",
    title: "Aitabar_Kareen_Tou_Bin",
    audioSrc: "/music/Sanam-marvi/Aitabar_Kareen_Tou_Bin_Ta_Sary_E_Nathi_By_Sanam_Marvi(128k).m4a",
  },
  {
    id: 2,
    img: "/images/sanamlogo.jpg",
    title: "Allah_Kare",
    audioSrc: "/music/Sanam-marvi/Allah_Kare___Sanam_Marvi___Full_Song___Gaane_Shaane(128k).m4a",
  },
  {
    id: 3,
    img: "/images/sanamlogo.jpg",
    title: "Chahy_Yar_Judai_Toukhe",
    audioSrc: "/music/Sanam-marvi/Chahy_Yar_Judai_Toukhe_Cha_Maloom___Sanam_Marvi___ڇاهي_يار_جدائي(128k).m4a",
  },
  {
    id: 4,
    img: "/images/sanamlogo.jpg",
    title: "Lagi_Bina_Chal_Mele_Noon",
    audioSrc: "/music/Sanam-marvi/Coke_Studio_Season_9__Lagi_Bina_Chal_Mele_Noon_Challiye__Saieen_Zahoor___Sanam_Marvi(128k).m4a",
  },
  {
    id: 5,
    img: "/images/sanamlogo.jpg",
    title: "Parchan_Shaal_Pavar_Dhola",
    audioSrc: "/music/Sanam-marvi/Sanam_Marvi___Rahat_Fateh_Ali_Khan_,_Parchan_Shaal_Pavar_Dhola(128k).m4a",
  },
  {
    id: 6,
    img: "/images/sanamlogo.jpg",
    title: "Ya_Jo_muhabato_ki_Qasam",
    audioSrc: "/music/Sanam-marvi/Sanam_Marvi_song__Ya_Jo_muhabato_ki_Qasam_kha_rahy_hu_Ap(128k).m4a",
  },
  {
    id: 7,
    img: "/images/sanamlogo.jpg",
    title: "Sanam_Marvi_Sufi_Song",
    audioSrc: "/music/Sanam-marvi/sufi song.m4a",
  },
  {
    id: 8,
    img: "/images/sanamlogo.jpg",
    title: "Tere_Ishq_Nachaya",
    audioSrc: "/music/Sanam-marvi/Tere_Ishq_Nachaya___Sanam_Marvi___Sufi_Kalam_of_Baba_Bulleh_Shah_R.A(128k).m4a",
  },
  {
    id: 9,
    img: "/images/sanamlogo.jpg",
    title: "TO_BIN_SARE_HE_NATHI",
    audioSrc: "/music/Sanam-marvi/TO_BIN_SARE_HE_NATHI____Sanam_Marvi___Album_01___HI-Res_Audio___Naz_Production(128k).m4a",
  },
  {
    id: 10,
    img: "/images/sanamlogo.jpg",
    title: "Ye_Ju_Muhabatun_Ki_Qasam",
    audioSrc: "/music/Sanam-marvi/Ye_Ju_Muhabatun_Ki_Qasam(128k).m4a",
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
      <div className=" w-full pt-10 grid grid-cols-1 md:grid-cols-2 items-center gap-3">
        <div className=" text-2xl font-sans font-semibold">
          <h2 className=" capitalize ">top 10 hits</h2>
          <p className=" capitalize">trending songs</p>
        </div>
        <div className=" flex justify-between items-center pr-4">
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
            src="/images/Sanamimgg.webp"
            alt=""
          />
        </div>

        <div className=" h-[390px] w-auto overflow-auto touch-pan-y">
          {audios.map((audio) => (
            <div
              key={audio.id}
              className="flex justify-between items-center mb-4 mr-1 shadow-md bg-white text-black p-2"
            >
              <div className="flex w-full gap-3 md:gap-5 items-center">
                <p>{audio.id}st</p>
                <img
                  src={audio.img}
                  alt={audio.title}
                  className="w-12 h-12 object-cover"
                />
                <h3 className="text-xs md:text-xl font-bold">{audio.title}</h3>
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
