"use client";
import React, { useState, useRef } from "react";
import DashboardComponent from "../DashboardComponent/page";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaPlay, FaPause } from "react-icons/fa6";

const audios = [
  {
    id: 1,
    img: "/images/weddinglogo.jpeg",
    title: "aja_Nachle_Title_Song",
    audioSrc: "/music/wedding-song/Aaja_Nachle_Title_Song___Madhuri_Dixit___Sunidhi_Chauhan___Salim–Sulaiman,_Piyush_Mishra___Full_Song(128k).m4a",
  },
  {
    id: 2,
    img: "/images/weddinglogo.jpeg",
    title: "D_Se_Dance",
    audioSrc: "/music/wedding-song/D_Se_Dance_Full_Video_-_Humpty_Sharma_Ki_Dulhania_Varun,_Alia_Vishal_Dadlani,_Shalmali_K(128k).m4a",
  },
  {
    id: 3,
    img: "/images/weddinglogo.jpeg",
    title: "Dil_Laga_Liya",
    audioSrc: "/music/wedding-song/Dil_Laga_Liya_-_Full_Video___Dil_Hai_Tumhaara___Preity___Arjun_Rampal___Alka_Yagnik___Udit_Narayan(128k).m4a",
  },
  {
    id: 4,
    img: "/images/weddinglogo.jpeg",
    title: "Kal_Ho_Naa_Ho",
    audioSrc: "/music/wedding-song/Maahi_Ve_Full_Video_-_Kal_Ho_Naa_Ho_Shah_Rukh_Khan_Saif_Ali_Preity_Udit_Narayan_Karan_J(128k).m4a",
  },
  {
    id: 5,
    img: "/images/weddinglogo.jpeg",
    title: "Mera_Yaar_Dildar_Bada",
    audioSrc: "/music/wedding-song/Mera_Yaar_Dildar_Bada_Sona___Jaanwar___Akshay_Kumar___Karisma_Kapoor___Sukhwinder_Singh__Gold_songs(128k).m4a",
  },
  {
    id: 6,
    img: "/images/weddinglogo.jpeg",
    title: "Piya_O_Re_Piya_feat",
    audioSrc: "/music/wedding-song/Piya_O_Re_Piya_feat._Atif_Aslam_-_Video_Song___Tere_Naal_Love_Ho_Gaya___Riteish___Genelia(128k).m4a",
  },
  {
    id: 7,
    img: "/images/weddinglogo.jpeg",
    title: "Saajanji_Ghar_Aaye",
    audioSrc: "/music/wedding-song/Saajanji_Ghar_Aaye_Full_Video_-_Kuch_Kuch_Hota_Hai_Shah_Rukh_Khan,Kajol_Alka_Yagnik(128k).m4a",
  },
  {
    id: 8,
    img: "/images/weddinglogo.jpeg",
    title: "Tere_Sang_Yaara",
    audioSrc: "/music/wedding-song/Tere_Sang_Yaara_-_LYRICS_Video___Rustom___Akshay_Kumar___Ileana_D_cruz___Atif_Aslam___Arko(128k).m4a",
  },
  {
    id: 9,
    img: "/images/weddinglogo.jpeg",
    title: "Wah_Wah_Ramji",
    audioSrc: "/music/wedding-song/Wah_Wah_Ramji_-_S._P._Balasubrahmanyam___Lata_Mangeshkar_s_Best_Song_-_Hum_Aapke_Hain_Koun(128k).m4a",
  },
  {
    id: 10,
    img: "/images/weddinglogo.jpeg",
    title: "/Yeh_Ladka_Hai_Allah",
    audioSrc: "/music/wedding-song/Yeh_Ladka_Hai_Allah_Best_Audio_Song_-_K3G_Shah_Rukh_Khan_Kajol_Udit_Narayan_Alka_Yagnik(128k).m4a",
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
        <div className=" text-2xl font-sans font-semibold">
          <h2 className=" capitalize ">top 10 hits</h2>
          <p className=" capitalize">Urdu Wedding songs</p>
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
            src="/images/weddingim.jpg"
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
