'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import './MySwiper.css';

// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { FaPlayCircle } from 'react-icons/fa';

export default function MySwiper() {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});
  const videos = [
    {
      id: 1,
      video: '/music/channah.mp4',
      title:
        'Chanh I Shabana Koyal I New Funny Song I Sindh Folk Studio I 2023',
    },
    {
      id: 2,
      video: '/music/BEST PRE WEDDING FILM 2024.mp4',
      title:
        'BEST PRE WEDDING FILM 2022 _ SHUBHAM & NISHA _ TU MILEYA 4K _ PIXO STUDIO FILMS _ INDIA',
    },
    
    {
      id: 3,
      video: '/music/Enni sohni.mp4',
      title: 'Enni Soni Full Video Hindi Songs in 4K _ 8K Ultra HD HDR 60 FPS',
    },
    {
      id: 4,
      video: '/music/Kya Loge Tum.mp4',
      title:
        'Kya Loge Tum _ Akshay Kumar _ Amyra Dastur _ BPraak _ Jaani _ Arvindr Khaira _ Zohrajabeen',
    },
    {
      id: 5,
      video: '/music/Mor Tho Tiley.mp4',
      title: 'Mor Tho Tiley Singer Narodha Malni _ Sindh TV Song _ HD 1080p',
    },
    {
      id: 6,
      video: '/music/Noor Official.mp4',
      title: 'Noor Official Music Video _ Deepali Sathe _ Anmol Daniel',
    },
    {
      id: 7,
      video: '/music/Mohd_Danish 10.mp4',
      title:
        'Ram_Sita_-_14_Phere__Vikrant_Massey,_Kriti_Kharbanda_Rekha_Bhardwaj_Mukund_S_for_JAM8_Shloke_Lal(360p)',
    },
    {
      id: 8,
      video: '/music/Nawal Khan 12.mp4',
      title:
        'Nawal Khan _ Bhar Do Jholi Meri _ New Kalam 2023 _ Official Video _ Home Islamic',
    },
    {
      id: 9,
      video: '/music/Paani 11.mp4',
      title:
        'Paani Paani Full Video Hindi Songs in 8K _ 4K Ultra HD HDR 60 FPS _ Badshah',
    },
    {
      id: 10,
      video: '/music/Panchhi 9.mp4',
      title:
        'Panchhi Bole _ Romantic Song _ Baahubali - The Beginning _ Prabhas, Tamannaah',
    },
    {
      id: 11,
      video: '/music/PRE WEDDING 8.MP4',
      title:
        'PRE WEDDING SHOOT _ KARANPREET + KAMALPREET _ A FILM BY- @sunnyjaswalphotography  MOB- 9915624218',
    },
    {
      id: 12,
      video: '/music/Wah Jo hee.MP4',
      title:
        'Wah Jo hee Pakhi Ahe Singer Nighat Naz New Fresh Album 786 Label By Surhan Production',
    },
    {
      id: 13,
      video: '/music/Maaf Karen.MP4',
      title:
        'Maaf Karen Tu Maula Maaf Karen _ Ramzan Special _ Sahir Ali Bagga _ Khaliq Chishti Present',
    },
  ];

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
    <h1 className=' text-3xl font-sans font-bold pt-8'>Explore Video</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow,Autoplay]}
        className="mySwiper"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <video
              ref={(element) => (videoRefs.current[video.id] = element)}
              id={`video-${video.id}`}
              className="rounded-lg object-cover w-full h-full"
              controls={playingVideo === video.id}
              onClick={() => handlePlayClick(video.id)}
            >
              <source src={video.video} type="video/mp4" />
            </video>

            {playingVideo !== video.id && (
              <button
                className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg"
                onClick={() => handlePlayClick(video.id)}
              >
                <FaPlayCircle className="w-full h-1/6 text-white" />
              </button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
