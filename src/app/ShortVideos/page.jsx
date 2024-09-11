'use client';
import { useState, useRef } from "react";
import SlickCarousel from "@/app/component/carosel/index";

const Videos = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const videos = [
    { id: 1, video: "/music/Short-Video/WhatsApp S.mp4" },
    { id: 2, video: "/music/Short-Video/Hindi Song.mp4" },
    { id: 3, video: "/music/Short-Video/A Cute School.mp4" },
    { id: 4, video: "/music/Short-Video/amazing dance.mp4" },
    { id: 5, video: "/music/Short-Video/Back crose.mp4" },
    { id: 6, video: "/music/Short-Video/Game Over.mp4" },
    { id: 7, video: "/music/Short-Video/Hazar Crore Ki.mp4" },
    { id: 8, video: "/music/Short-Video/He bhgwan ye kya.mp4" },
    { id: 9, video: "/music/Short-Video/Jaadui bag.mp4" },
    { id: 10, video: "/music/Short-Video/Mariana Trench.mp4" },
    { id: 11, video: "/music/Short-Video/Round2Hell.mp4" },
    { id: 12, video: "/music/Short-Video/Teri Dhadkhano.mp4" },
    { id: 13, video: "/music/Short-Video/this beat.mp4" },
    { id: 14, video: "/music/Short-Video/Tiger Shroff.mp4" },
    { id: 15, video: "/music/Short-Video/videoplayback (1).MP4" },
    { id: 16, video: "/music/Short-Video/WhatsApp Status! Status Video ! Song Status! Hindi Song Status! 1Music.World! Short Video Status.....MP4" },
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
    <div className=" w-full" data-carousel="slide">
      <div className="relative h-full overflow-hidden py-6">
      <h1 className="text-2xl font-bold mb-4 px-2">Short Videos</h1>
        <SlickCarousel>
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex justify-center items-center flex-col relative transition-all duration-500 w-full md:h-[420px]"
            >
              <video
                ref={(element) => (videoRefs.current[video.id] = element)}
                id={`video-${video.id}`}
                className=" object-cover w-full h-[420px]"
                controls={playingVideo === video.id}
                onClick={() => handlePlayClick(video.id)}
              >
                <source className=" w-full h-[350px]" src={video.video} type="video/mp4" />
              </video>
              {playingVideo !== video.id && (
                <button
                  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50"
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
