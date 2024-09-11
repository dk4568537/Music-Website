"use client";
import { useState, useRef } from "react";
import SlickCarousel from "@/app/component/carosel/index";

const Videos = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const videos = [
    { id: 1, video: "/music/BEST PRE WEDDING FILM 2024.mp4" },
    { id: 2, video: "/music/channah.mp4" },
    { id: 3, video: "/music/Enni sohni.mp4" },
    { id: 4, video: "/music/Kya Loge Tum.mp4" },
    { id: 5, video: "/music/Mor Tho Tiley.mp4" },
    { id: 6, video: "/music/Noor Official.mp4" },
    { id: 7, video: "/music/Mohd_Danish 10.mp4" },
    { id: 8, video: "/music/Nawal Khan 12.mp4" },
    { id: 9, video: "/music/Paani 11.mp4" },
    { id: 10, video: "/music/Panchhi 9.mp4" },
    { id: 11, video: "/music/PRE WEDDING 8.MP4" },
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
    <div className="w-full" data-carousel="slide">
      <div className="relative h-full overflow-hidden rounded-lg py-6">
        <h1 className=" font-bold text-2xl pb-4">Explore Video</h1>
        <SlickCarousel>
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex justify-center items-center flex-col rounded-lg relative transition-all duration-500 border w-full md:h-[250px]"
            >
              <video
                ref={(element) => (videoRefs.current[video.id] = element)}
                id={`video-${video.id}`}
                className="rounded-lg object-cover w-full md:h-[250px]"
                controls={playingVideo === video.id}
                onClick={() => handlePlayClick(video.id)}
              >
                <source src={video.video} />
              </video>
              {playingVideo !== video.id && (
                <button
                  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg"
                  onClick={() => handlePlayClick(video.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.752 11.168l-6.992-4.01a.75.75 0 00-1.135.642v8.02a.75.75 0 001.135.643l6.992-4.01a.75.75 0 000-1.285z"
                    />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </SlickCarousel>
      </div>
    </div>
  );
};

export default Videos;
