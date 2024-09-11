"use client";
import React from "react";
import Link from "next/link";
import SlickCarousel from "../component/carosel";

const AudioSlider = () => {
  const audioItems = [
    {
      href: "/AslamSongs",
      src: "/images/Aslam faqeer.jpg",
      alt: "Aslam Faqeer",
      title: "Aslam Faqeer",
    },
    {
      href: "/AllahSongs",
      src: "/images/Allah.jpg",
      alt: "Allan Faqeer",
      title: "Allan Faqeer",
    },
    {
      href: "/SanamAudios",
      src: "/images/Sanam marvi.jpg",
      alt: "Sanam Marvi",
      title: "Sanam Marvi",
    },
    {
      href: "/RajabSongs",
      src: "/images/Rajab faqeer.jpg",
      alt: "Rajab Faqeer",
      title: "Rajab Faqeer",
    },
    {
      href: "/KhushbooSongs",
      src: "/images/khushboocart.jpg",
      alt: "Khushboo Lagari",
      title: "Khushboo Lagari",
    },
    {
      href: "/MumtazSongs",
      src: "/images/mumtaz.jpg",
      alt: "Mumtaz Molai",
      title: "Mumtaz Molai",
    },
    {
      href: "/WeddingSongs",
      src: "/images/Wedding.jpg",
      alt: "Wedding Song",
      title: "Wedding Song",
    },
    {
      href: "/NaziaSongs",
      src: "/images/Nazia.jpg",
      alt: "Nazia Hassan",
      title: "Nazia Hassan",
    },
    {
      href: "/AtifSongs",
      src: "/images/Atif-Aslam.png",
      alt: "Atif Aslam",
      title: "Atif Aslam",
    },
    {
      href: "/MehakSongs",
      src: "/images/mehak.jpg",
      alt: "Mehak Malik",
      title: "Mehak Malik",
    },
    {
      href: "/MonimaSongs",
      src: "/images/monima mustehsan.jpg",
      alt: "Monima Mustehsan",
      title: "Monima Mustehsan",
    },
  ];

  return (
    <div className=" w-full" data-carousel="slide">
      <h2 className=" text-2xl font-bold">Top Artist</h2>
      <div className="relative h-full overflow-hidden py-6">
        <SlickCarousel>
          {audioItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <div className="max-w-sm flex justify-center flex-col items-center overflow-hidden">
                <img
                  className="justify-center flex items-center shadow-teal-300 rounded-xl shadow-md w-full h-full"
                  src={item.src}
                  alt={item.alt}
                />
                <h1 className="text-center pt-2 font-bold">{item.title}</h1>
              </div>
            </Link>
          ))}
        </SlickCarousel>
      </div>
    </div>
  );
};

export default AudioSlider;
