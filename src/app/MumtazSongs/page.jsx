"use client";
import React, { useState, useRef } from "react";
import DashboardComponent from "../DashboardComponent/page";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaPlay, FaPause } from "react-icons/fa6";

const audios = [
  {
    id: 1,
    img: "/images/mumtazlogo.webp",
    title: "Awhan_Jo_Hathro_Natha",
    audioSrc: "/music/Mumtaz-molai/Awhan_Jo_Hathro_Natha_Motayon(128k).m4a",
  },
  {
    id: 2,
    img: "/images/mumtazlogo.webp",
    title: "Baki_Galhyon_Phone_Te",
    audioSrc: "/music/Mumtaz-molai/Baki_Galhyon_Phone_Te___Munwar_Mumtaz_Molai___Super_Hit_Sindhi_Song___SR_Production(128k).m4a",
  },
  {
    id: 3,
    img: "/images/mumtazlogo.webp",
    title: "Oha_Ghitti_Chadye_Dinam",
    audioSrc: "/music/Mumtaz-molai/Oha_Ghitti_Chadye_Dinam_-_Mumtaz_Molai_-_New_Song_2022_-_SR_Production(128k).m4a",
  },
  {
    id: 4,
    img: "/images/mumtazlogo.webp",
    title: "PEhRYAN_GUL_CHATIYAN",
    audioSrc: "/music/Mumtaz-molai/PEhRYAN_GUL_CHATIYAN_BY_MUMTAZ_MOLAI__SINDHI_HIT_SONG(128k).m4a",
  },
  {
    id: 5,
    img: "/images/mumtazlogo.webp",
    title: "Suhno_Bhe_Suhno_Aa",
    audioSrc: "/music/Mumtaz-molai/Suhno_Bhe_Suhno_Aa___Singer_Mumtaz_Molai___New_Super_Hit_Song___Akhriyan_Mai_Jadu__(128k).m4a",
  },
  {
    id: 6,
    img: "/images/mumtazlogo.webp",
    title: "Tun_Mili_Wanj_Munkhay",
    audioSrc: "/music/Mumtaz-molai/Tun_Mili_Wanj_Munkhay___Mumtaz_Molai___Album_33___Hd_2019___Shadab_Channel(128k).m4a",
  },
  {
    id: 7,
    img: "/images/mumtazlogo.webp",
    title: "Wafa_Bhi_Kar_Zulm_Bhi_Kar",
    audioSrc: "/music/Mumtaz-molai/Wafa_Bhi_Kar_Zulm_Bhi_Kar____Mumtaz_Molai____Album_57____Eid_Gift_2021____Dil_Enterprises(128k).m4a",
  },
  {
    id: 8,
    img: "/images/mumtazlogo.webp",
    title: "YAAR_TEDE_TON_SOHNA",
    audioSrc: "/music/Mumtaz-molai/YAAR_TEDE_TON_SOHNA___Mumtaz_Molai_-_Gulaab___Duet_Song_2023___Saraiki_Song_2023___Naz_Production(128k).m4a",
  },
  {
    id: 9,
    img: "/images/mumtazlogo.webp",
    title: "Zindagi_Sakoo_Nacha",
    audioSrc: "/music/Mumtaz-molai/Zindagi_Sakoo_Nacha(128k).m4a",
  },
  {
    id: 10,
    img: "/images/mumtazlogo.webp",
    title: "AWAHN_SABNI_PADESIN_WARAN",
    audioSrc: "/music/Mumtaz-molai/AWAHN_SABNI_PADESIN_WARAN_KHY___Mamtaz_molai_new_album_21_2018___(128k).m4a",
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
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-3 pt-10">
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
            src="/images/mumtazimg.png"
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
