"use client";
import React, { useState, useRef } from "react";
import DashboardComponent from "../DashboardComponent/page";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaPlay, FaPause } from "react-icons/fa6";

const audios = [
  {
    id: 1,
    img: "/images/khushboologo.jpg",
    title: "Allah_Hi_Allah",
    audioSrc: "/music/Khushboo-lagari/Allah_Hi_Allah___Khushboo_Laghari___Best_Hamd_2019(128k).m4a",
  },
  {
    id: 2,
    img: "/images/khushboologo.jpg",
    title: "Boht_Yaad_Aatay_Ho_Tum",
    audioSrc: "/music/Khushboo-lagari/Boht_Yaad_Aatay_Ho_Tum___Khushboo_Laghari____Video_Song____Thar_Production(128k).m4a",
  },
  {
    id: 3,
    img: "/images/khushboologo.jpg",
    title: "Chha_Ta_Rana_Kare_Wayo_Aahin",
    audioSrc: "/music/Khushboo-lagari/Chha_Ta_Rana_Kare_Wayo_Aahin___Khushboo_Laghari___Album_32_2020___Full_HD_Song__Naz_Production(128k).m4a",
  },
  {
    id: 4,
    img: "/images/khushboologo.jpg",
    title: "Dil_Soch_Samjh_K_Laven",
    audioSrc: "/music/Khushboo-lagari/Dil_Soch_Samjh_K_Laven___Khushboo_laghari___New_Saraiki_Song___2024(128k).m4a",
  },
  {
    id: 5,
    img: "/images/khushboologo.jpg",
    title: "IHE_MASJID_MANDIR_TON_HI",
    audioSrc: "/music/Khushboo-lagari/IHE_MASJID_MANDIR_TON_HI_JAN__Khushboo_Laghari___New_Eid_Album_32_2020___Naz_Production(128k).m4a",
  },
  {
    id: 6,
    img: "/images/khushboologo.jpg",
    title: "Ishq_Pireen_jo_Piyara",
    audioSrc: "/music/Khushboo-lagari/Ishq_Pireen_jo_Piyara,_Khushboo_laghari,_New_Soofi_Song_2022,_Presented_by_Sangeet_Music_Production.(128k).m4a",
  },
  {
    id: 7,
    img: "/images/khushboologo.jpg",
    title: "Na_Koi_Takrar",
    audioSrc: "/music/Khushboo-lagari/Na_Koi_Takrar___Khushboo_Laghari___Beautiful_Saraiki_Song_2019___Thar_Production(128k).m4a",
  },
  {
    id: 8,
    img: "/images/khushboologo.jpg",
    title: "RAAT_JAANE_CHAND_JAANE",
    audioSrc: "/music/Khushboo-lagari/RAAT_JAANE_CHAND_JAANE_BY_KHUSHBOO_LAGHARI_NEW_ALBUM_30_FULL_HD_SONG_2019_NAZ_PRODUCTION(128k).m4a",
  },
  {
    id: 9,
    img: "/images/khushboologo.jpg",
    title: "Tumhen_Dill_Lagi_Bhool",
    audioSrc: "/music/Khushboo-lagari/Tumhen_Dill_Lagi_Bhool_-_Khushboo_Laghari_-_Latest_Song_2018_-_Latest_Punjabi_And_Saraiki(128k).m4a",
  },
  {
    id: 10,
    img: "/images/khushboologo.jpg",
    title: "Udariyon_Door_Pae_Aariyon",
    audioSrc: "/music/Khushboo-lagari/Udariyon_Door_Pae_Aariyon___Khushboo_laghari___New_Sindhi_Song_2024(128k).m4a",
  },
  {
    id: 11,
    img: "/images/khushboologo.jpg",
    title: "ZINDAGI_AAHE_YA_MASHKRI",
    audioSrc: "/music/Khushboo-lagari/ZINDAGI_AAHE_YA_MASHKRI____Khushboo_Laghari____Album_30___Full_HD_Song____Naz_production(128k).m4a",
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
      <div className=" pt-10 grid grid-cols-1 md:grid-cols-2 items-center gap-3">
        <div className=" text-2xl font-sans font-semibold">
          <h2 className=" capitalize ">top 20 hits</h2>
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
          <h2 className=" font-semibold">11 Songs</h2>
        </div>
        <div>
          <img
            className=" rounded-md w-full sm:h-full md:h-[400px]"
            src="/images/khushbooimg.jpg"
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
