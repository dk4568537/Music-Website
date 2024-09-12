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
    img: "/images/rajablogo.jpg",
    title: "Aseen_Keen_Jiyaseen",
    audioSrc: "/music/Rajab-Faqeer/Aseen_Keen_Jiyaseen____Rajab_Faqeer(128k).m4a",
  },
  {
    id: 2,
    img: "/images/rajablogo.jpg",
    title: "Dardan_Dil_Azari_Sayen",
    audioSrc: "/music/Rajab-Faqeer/Dardan_Dil_Azari_Sayen___Full_Sad_Sindhi_Song___Ustad_Rajab_Faqeer(128k).m4a",
  },
  {
    id: 3,
    img: "/images/rajablogo.jpg",
    title: "Dunia_me_asan_aedo",
    audioSrc: "/music/Rajab-Faqeer/Dunia_me_asan_aedo___Rajab_Faqeer___Rajab_Faqeer_Dubai_2023_Song___Sindhi_song_2023___Sur_of_Sindh(128k).m4a",
  },
  {
    id: 4,
    img: "/images/rajablogo.jpg",
    title: "Ha_Man_Tuhinje_Bina_Kujh_Ba_Ta",
    audioSrc: "/music/Rajab-Faqeer/Ha_Man_Tuhinje_Bina_Kujh_Ba_Ta_Nahiyan___By_Rajab_Faqeer_New_Sindhi_Song(128k).m4a",
  },
  {
    id: 5,
    img: "/images/rajablogo.jpg",
    title: "Hal_Ta_Keh_Mehkade_Rajab",
    audioSrc: "/music/Rajab-Faqeer/Hal_Ta_Keh_Mehkade_Me_Halon___Barkat_Faqeer___Hunar-Handicraft_Festival_2023___Port_Grand_Karachi(128k).m4a",
  },
  {
    id: 6,
    img: "/images/rajablogo.jpg",
    title: "Hal_Ta_Kehn_Maqade_me_Halon",
    audioSrc: "/music/Rajab-Faqeer/Hal_Ta_Kehn_Maqade_me_Halon____Rajab_Faqeer____Imdad_Hussaini____Ustad_Bukhari_31_Warsi2023(128k).m4a",
  },
  {
    id: 7,
    img: "/images/rajablogo.jpg",
    title: "jawani_na_rehndi",
    audioSrc: "/music/Rajab-Faqeer/jawani_na_rehndi_Rajab_faqeer_Song__Sheikh_Ayaz_poetry_(128k).m4a",
  },
  {
    id: 8,
    img: "/images/rajablogo.jpg",
    title: "Muhinji_Tosan_Muhabat_Mitha",
    audioSrc: "/music/Rajab-Faqeer/Muhinji_Tosan_Muhabat_Mitha___Rajab_Faqeer_Lahooti_melo_performance___New_TikTok_trend_Rajab_Faqeer(128k).m4a",
  },
  {
    id: 9,
    img: "/images/rajablogo.jpg",
    title: "Aadhi_Raat_Andhari_Ja",
    audioSrc: "/music/Rajab-Faqeer/Rajab_Faqeer___Aadhi_Raat_Andhari_Ja___Ho_Muhinjay_Goday_Nind_Suti____Haji_sand_Poetry(128k).m4a",
  },
  {
    id: 10,
    img: "/images/rajablogo.jpg",
    title: "Jawani_Na_Rehndii",
    audioSrc: "/music/Rajab-Faqeer/Rajab_Faqeer__Full_Performance__Jawani_Na_Rehndi___Hal_Ta_Kehn_Maikade_Me_Halon___Lahooti_Melo_2024(128k).m4a",
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
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 border-l items-center gap-3 p-2">
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
          <Image
            className=" rounded-md w-full sm:h-full md:h-[400px]"
            src="/images/rajabimg.jpg"
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
