"use client";
import React, { useRef, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import DashboardComponent from "../DashboardComponent/page";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const videos = [
    {
      id: 1,
      video: "/music/BEST PRE WEDDING FILM 2024.mp4",
      title:
        "BEST PRE WEDDING FILM 2022 _ SHUBHAM & NISHA _ TU MILEYA 4K _ PIXO STUDIO FILMS _ INDIA",
    },
    {
      id: 2,
      video: "/music/channah.mp4",
      title:
        "Chanh I Shabana Koyal I New Funny Song I Sindh Folk Studio I 2023",
    },
    {
      id: 3,
      video: "/music/Enni sohni.mp4",
      title: "Enni Soni Full Video Hindi Songs in 4K _ 8K Ultra HD HDR 60 FPS",
    },
    {
      id: 4,
      video: "/music/Kya Loge Tum.mp4",
      title:
        "Kya Loge Tum _ Akshay Kumar _ Amyra Dastur _ BPraak _ Jaani _ Arvindr Khaira _ Zohrajabeen",
    },
    {
      id: 5,
      video: "/music/Mor Tho Tiley.mp4",
      title: "Mor Tho Tiley Singer Narodha Malni _ Sindh TV Song _ HD 1080p",
    },
    {
      id: 6,
      video: "/music/Noor Official.mp4",
      title: "Noor Official Music Video _ Deepali Sathe _ Anmol Daniel",
    },
    {
      id: 7,
      video: "/music/Mohd_Danish 10.mp4",
      title:
        "Ram_Sita_-_14_Phere__Vikrant_Massey,_Kriti_Kharbanda_Rekha_Bhardwaj_Mukund_S_for_JAM8_Shloke_Lal(360p)",
    },
    {
      id: 8,
      video: "/music/Nawal Khan 12.mp4",
      title:
        "Nawal Khan _ Bhar Do Jholi Meri _ New Kalam 2023 _ Official Video _ Home Islamic",
    },
    {
      id: 9,
      video: "/music/Paani 11.mp4",
      title:
        "Paani Paani Full Video Hindi Songs in 8K _ 4K Ultra HD HDR 60 FPS _ Badshah",
    },
    {
      id: 10,
      video: "/music/Panchhi 9.mp4",
      title:
        "Panchhi Bole _ Romantic Song _ Baahubali - The Beginning _ Prabhas, Tamannaah",
    },
    {
      id: 11,
      video: "/music/PRE WEDDING 8.MP4",
      title:
        "PRE WEDDING SHOOT _ KARANPREET + KAMALPREET _ A FILM BY- @sunnyjaswalphotography  MOB- 9915624218",
    },
    {
      id: 12,
      video: "/music/Balma.mp4",
      title: "Balma Official Music Video _ Deepali Sathe _",
    },
    {
      id: 13,
      video: "/music/bara-lajpal-ali.mp4",
      title: "Ishq-Sufiyana Music Video _ Deepali Sathe _",
    },
    {
      id: 14,
      video: "/music/Prem.mp4",
      title:
        "Prem Ratan Dhan Payo Song (4k Video) Rahi Bagga Ft. Palak Muchhal",
    },

    {
      id: 15,
      video: "/music/Cham Cham.mp4",
      title:
        "Cham Cham Full Video   BAAGHI   Tiger Shroff, Shraddha Kapoor  Meet Bros, Monali Thaku",
    },
    {
      id: 16,
      video: "/music/Tu-Mere.mp4",
      title:
        "Tu_Mere_Saamne_Me_Tere_Sammne_-_Zawar_Faqeer_-_New_Mehfil_-_NooRani_Echo_Kandiaro_2023(360p)",
    },
  ];

  const filteredVideos = videos.filter((video) => {
    return video.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handlePlayClick = (videoId) => {
    Object.keys(videoRefs.current).forEach((id) => {
      if (id !== videoId.toString() && videoRefs.current[id]) {
        videoRefs.current[id].pause();
      }
    });
    setPlayingVideo(videoId);
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      videoElement.play();
    }
  };

  return (
    <>
      <DashboardComponent>
       
          <div className=" flex justify-center flex-col mx-auto py-2 px-1 ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className=" relative transition-all duration-500 w-full md:h-[250px] max-w-sm overflow-hidden rounded-lg shadow-md shadow-teal-300 "
                >
                  <video
                    ref={(element) => (videoRefs.current[video.id] = element)}
                    id={`video-${video.id}`}
                    className=" rounded-lg object-cover w-full h-full "
                    controls={playingVideo === video.id}
                    onClick={() => handlePlayClick(video.id)}
                  >
                    <source
                      className=" w-full"
                      src={video.video}
                      type="video/mp4"
                    />
                  </video>
                  {playingVideo !== video.id && (
                    <button
                      className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg"
                      onClick={() => handlePlayClick(video.id)}
                    >
                      <FaPlayCircle className=" w-full h-1/6 text-white" />
                    </button>
                  )}

                  <div className="px-3 py-2">
                    <div className="font-bold text-sm mb-2">{video.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
      </DashboardComponent>
    </>
  );
};

export default Page;
