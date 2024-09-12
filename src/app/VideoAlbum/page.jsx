"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

import "./VideoAlbum.css";

// import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const slides = [
    { id: 1, href: "/AllahSongs", src: "/images/Allah.jpg", alt: "Allah" },
    {
      id: 2,
      href: "/WeddingSongs",
      src: "/images/Wedding.jpg",
      alt: "Wedding",
    },
    { id: 3, href: "/MehakSongs", src: "/images/mehak.jpg", alt: "Mehak" },
    {
      id: 4,
      href: "/AtifSongs",
      src: "/images/Atif-Aslam.png",
      alt: "Atif Aslam",
    },
    {
      id: 5,
      href: "/MonimaSongs",
      src: "/images/monima mustehsan.jpg",
      alt: "Monima Mustehsan",
    },
    {
      id: 6,
      href: "/NaziaSongs",
      src: "/images/Nazia.jpg",
      alt: "Nazia Hassan",
    },
    {
      id: 7,
      href: "/KhushbooSongs",
      src: "/images/khushboocart.jpg",
      alt: "Khushboo",
    },
    {
      id: 8,
      href: "/SanamAudios",
      src: "/images/Sanam marvi.jpg",
      alt: "Sanam Marvi",
    },
    { id: 9, href: "/MumtazSongs", src: "/images/mumtaz.jpg", alt: "Mumtaz" },
    {
      id: 10,
      href: "/AslamSongs",
      src: "/images/Aslam faqeer.jpg",
      alt: "Aslam Faqeer",
    },
  ];
  const [slideIndex, setSlideIndex] = useState();

  return (
    <>
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
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper px-2"
        onSlideChange={(swiper) => {
          const activeItem = slides[swiper.realIndex];
          setSlideIndex(activeItem);
        }}
      >
        {slides.map((slide, id) => (
          <SwiperSlide key={id}>
            <Link href={slide.href}>
              <div
                className="max-w-sm flex justify-center flex-col rounded items-center overflow-hidden shadow-xl"
                style={{
                  opacity: slide?.id === slideIndex?.id ? 1 : 0.45,
                }}
              >
                <Image
                  className="justify-center flex items-center w-full h-full"
                  src={slide.src}
                  alt={slide.alt}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center font-bold text-2xl gap-10 mt-4">
        <Link href="/AudioSongs">
          <p className="hover:underline decoration-pink-500">Audio</p>
        </Link>
        <Link href="/videoSongs">
          <p className="hover:underline decoration-pink-500">Video</p>
        </Link>
        <Link href="/ShortVideos">
          <p className="hover:underline decoration-pink-500">Shorts</p>
        </Link>
      </div>
    </>
  );
}
