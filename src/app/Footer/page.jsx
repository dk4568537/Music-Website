"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  const getYear = new Date().getFullYear();
  return (
    <div className="pb-3 flex justify-center md:px-20 items-center flex-col bg-gradient-to-r from-[#be0002] via-[#ff6600] to-[#ffcc00] text-white">
      <div className="container border-b-2 border-blue-200 shadow-sm flex justify-start flex-col">
        <div className="flex flex-col items-center space-x-10 md:flex-row pt-5 md:pt-24">
          <Image src="/images/FooterLogo.png" alt="Footer Logo" />
          <h1 className="pt-6 md:pt-0 uppercase text-2xl md:text-6xl font-extrabold text-center md:text-left">
            Mobitising
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 font-extralight pt-5 md:pt-10 pb-5">
          <div className="flex flex-col pl-3 md:pl-0">
            <h1 className="font-bold text-2xl pb-2">Quick Links</h1>
            <ul className="text-xl gap-3">
              <li>Company</li>
              <li>Services</li>
              <li>Solution</li>
              <li>Consulting</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-col pl-3 md:pl-0">
            <h1 className="font-bold text-2xl pb-2">Services</h1>
            <ul className="text-lg gap-1">
              <li>
                <Link href="https://mobitisinginc.com/mobile-app-development/" passHref>
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="https://mobitisinginc.com/careers/" passHref>
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="https://gfsitsolutions.com/Services/UIUXService.html" passHref>
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="https://gfsitsolutions.com/Services/EcommerceDevService.html" passHref>
                  Ecommerce Development
                </Link>
              </li>
              <li>
                <Link href="https://mobitisinginc.com/" passHref>
                  Game Development
                </Link>
              </li>
              <li>
                <Link href="https://gfsitsolutions.com/Services/BlockChainService.html" passHref>
                  Blockchain Development
                </Link>
              </li>
              <li>
                <Link href="https://mobitisinginc.com/digital-marketing-services/" passHref>
                  Digital Marketing Development
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 pl-3 md:pl-0">
            <h1 className="font-bold text-2xl">Contact Us</h1>
            <p className="flex items-center text-lg">
              <Image src="/images/Emaillogo.png" alt="Email Logo" className="mr-4 h-4 w-18" />
              info@Mobitisinginc.com
            </p>
            <p className="flex items-center text-lg">
              <Image src="/images/CallLogo.png" alt="Call Logo" className="mr-4 h-4 w-18" />
              +92-2134322370
            </p>
            <p className="flex items-center text-lg">
              <Image src="/images/LocationLogo.png" alt="Location Logo" className=" mr-4 h-4 w-18" />
              Karachi, Pakistan
            </p>
          </div>
          <div className="flex flex-col px-3 md:px-0">
            <h1 className="font-bold text-2xl pb-2">Follow Us</h1>
            <div className="flex gap-2 pb-5">
              <Link href="https://www.facebook.com/MobiTising/" passHref>
                <Image src="/images/FacebookLogo.png" alt="Facebook Logo" width={50} height={50} />
              </Link>
              <Link href="https://www.instagram.com" passHref>
                <Image src="/images/InstagramLogo.png" alt="Instagram Logo" width={50} height={50} />
              </Link>
              <Link href="https://www.linkedin.com/company/mobitising/mycompany/" passHref>
                <Image src="/images/LinkedinLogo.png" alt="Linkedin Logo" width={50} height={50} />
              </Link>
              <Link href="https://www.youtube.com/channel/UCBmwijUXlNO5UhMIxfmMHyQ" passHref>
                <Image src="/images/YoutubeLogo (1).png" alt="Youtube Logo" width={50} height={50} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="md:text-lg lg:text-xl font-sans font-thin pt-1">
          Copyright © {getYear} MOBITISING IT SOLUTIONS. All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default Page;
