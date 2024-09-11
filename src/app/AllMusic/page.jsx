"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "./AllMusic.css";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import DashboardComponent from "../DashboardComponent/page";

const AllMusicPage = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const audios = [
    {
      id: 1,
      src: "/music/Audios-music/! ALI RAZA ANSARI JAN.MP3",
      title: "ALI RAZA ANSARI",
    },
    { id: 2, src: "/music/Audios-music/@LI R@Z@.mp3", title: "TUM MEHABOB MERY" },
    {
      id: 3,
      src: "/music/Audios-music/2pata sark 03003096039.mp3",
      title: "DOPATA SARK",
    },
    {
      id: 4,
      src: "/music/Audios-music/03340388197 ALI AM.mp3",
      title: "DIL CHEER KY ",
    },
    {
      id: 5,
      src: "/music/Audios-music/03340388197ALI AK.mp3",
      title: "HAR QADAM PAR",
    },
    {
      id: 6,
      src: "/music/Audios-music/1111111111111.mp3",
      title: "LO HUM NY TUMHY",
    },
    {
      id: 7,
      src: "/music/Audios-music/18122011074000.mp3",
      title: "SAJAN TUM SY",
    },
    { id: 8, src: "/music/Audios-music/A_001.mp3", title: "HASEEN YE NAZRA" },
    {
      id: 9,
      src: "/music/Audios-music/AAEY HO MERI ZINDIGI.mp3",
      title: "AYE HO MERI ZANDAGI",
    },
    {
      id: 10,
      src: "/music/Audios-music/AApki Dushmani Qabol.mp3",
      title: "APP KI DUSHMANY",
    },
    {
      id: 11,
      src: "/music/Audios-music/Aati Hai To chal.mp3",
      title: "Aati Hai To chal",
    },
    {
      id: 12,
      src: "/music/Audios-music/abdul qayoom junejo qs  .mp3",
      title: "OAR JA KALY",
    },
    {
      id: 13,
      src: "/music/Audios-music/AF AF AF AF AF AF.mp3",
      title: "CHURA LY GAY HUM",
    },
    {
      id: 14,
      src: "/music/Audios-music/AGAR AASMA TAK  MAERY.mp3",
      title: "GAR AASMA TAK  MAERY",
    },
    {
      id: 15,
      src: "/music/Audios-music/Aisa Bhi Dekho.mp3",
      title: "Aisa Bhi Dekho",
    },
    {
      id: 16,
      src: "/music/Audios-music/AISE JIYOON GA MAIN.mp3",
      title: "AISE JIYOON GA MAIN",
    },
    {
      id: 17,
      src: "/music/Audios-music/AITBAR JAANSS.mp3",
      title: "TUM KAB AEO GY",
    },
    { id: 18, src: "/music/Audios-music/AJJAAJ~1.mp3", title: "AAJA Mahi" },
    {
      id: 19,
      src: "/music/Audios-music/AK AK AK AK AK AK AK AK AK AK AK AK AK.mp3",
      title: "JAB SY DILL DIYA",
    },
    {
      id: 20,
      src: "/music/Audios-music/AK AK AK AK AK.mp3",
      title: "JAB HALY DILL",
    },
    { id: 21, src: "/music/Audios-music/ALI AF JAN.mp3", title: "AJ SAF SAF YE" },
    {
      id: 22,
      src: "/music/Audios-music/ALI AK JAN.mp3",
      title: "INTZAR INTZAR INTZAR",
    },
    {
      id: 23,
      src: "/music/Audios-music/ALI AS JAN.mp3",
      title: "BHED NHE KHOLNA",
    },
    { id: 24, src: "/music/Audios-music/ALI JAN.mp3", title: "SUNA HY PHOLE" },
    {
      id: 25,
      src: "/music/Audios-music/ALI KE JAN.mp3",
      title: "PIYA PIYA HO PIYA",
    },
    { id: 26, src: "/music/Audios-music/ALI KING 1.mp3", title: "SATHE MERY" },
    {
      id: 27,
      src: "/music/Audios-music/ALI RAZA 0334088197.mp3",
      title: "O JANY JANA",
    },
    {
      id: 28,
      src: "/music/Audios-music/ALI RAZA ANSARI 03340388197_001.mp3",
      title: "BECHEN MERA YE DILL",
    },
    {
      id: 29,
      src: "/music/Audios-music/ALI RAZA ANSARI 03340388197.mp3",
      title: "PIYAR HOKY RAHTA HY",
    },
    {
      id: 30,
      src: "/music/Audios-music/AM AM AM AM AM AM AM AM AM AM AM AM AM AM AM AM AM AM AM AM.mp3",
      title: "MERA AK SAPNA",
    },
    {
      id: 31,
      src: "/music/Audios-music/AM AM AM AM AM AM AM JAAN.mp3",
      title: "DIL DEWANY KA ",
    },
    {
      id: 32,
      src: "/music/Audios-music/AM AM JAAN.mp3",
      title: "KAR NA SAKY HUM",
    },
    { id: 33, src: "/music/Audios-music/AM AM JAAN.mp3", title: "PYAR KA SODA" },
    {
      id: 34,
      src: "/music/Audios-music/Ankhan which.chorni..mp3",
      title: "ANKHAN WATCH KAHY",
    },
    {
      id: 35,
      src: "/music/Audios-music/ankho main nendain na dil.mp3",
      title: "Ankho main nendain",
    },
    {
      id: 36,
      src: "/music/Audios-music/ANWER KHAN.mp3",
      title: "Dekhye kiss qadar",
    },
    {
      id: 37,
      src: "/music/Audios-music/APKA DIL HMARY.mp3",
      title: "APP KO AHASAS HY",
    },
    { id: 38, src: "/music/Audios-music/APNIZI~1.mp3", title: "APNIZI~1" },
    {
      id: 39,
      src: "/music/Audios-music/AR JAN.mp3",
      title: "PIYAR TUM SY KARNA ",
    },
    {
      id: 40,
      src: "/music/Audios-music/asghar ali (28).mp3",
      title: "CHORI KHANKIYE RY",
    },
    {
      id: 41,
      src: "/music/Audios-music/ASGHAR=ALI (23).mp3",
      title: "DIL BEQARAR HWA ",
    },
    { id: 42, src: "/music/Audios-music/ASI.mp3", title: "ANKHON SY CHALAKTA" },
    {
      id: 43,
      src: "/music/Audios-music/asi£ ali khaskheli jaan   03313194358$n03131299200  .mp3",
      title: "ABHE SANS LENY",
    },
    {
      id: 44,
      src: "/music/Audios-music/AUR IS DIL MAIN.mp3",
      title: "AUR IS DIL MAIN",
    },
    {
      id: 45,
      src: "/music/Audios-music/aur kia zandgani he.mp3",
      title: "AUR KIA ZANDGANI HE",
    },
    {
      id: 46,
      src: "/music/Audios-music/BADEL SE POCHO [BOBY MEMON 0333 2526879.mp3",
      title: "BADEL SE POCHO",
    },
    {
      id: 47,
      src: "/music/Audios-music/Bahut Din Hoey H.mp3",
      title: "Bahut Din Hoey H",
    },
    {
      id: 48,
      src: "/music/Audios-music/BAIMAN PIYA RE KAYA ZULAM(kamran lab).mp3",
      title: "BAIMAN PIYA RE KAYA",
    },
    { id: 49, src: "/music/Audios-music/BANDHU~1.mp3", title: "SOORAJ KAB DOOR" },
    {
      id: 50,
      src: "/music/Audios-music/CHAHAT NA HOTI.mp3",
      title: "CHAHAT NA HOTI",
    },
    {
      id: 51,
      src: "/music/Audios-music/Copy of 03155878105.mp3",
      title: "KSI KY ISHAQ MEN",
    },
    {
      id: 52,
      src: "/music/Audios-music/D PARDEISYA LH ITNA BATA.mp3",
      title: "PARDEISYA ITNA BATA",
    },
    { id: 53, src: "/music/Audios-music/D1.mp3", title: "DILL SUNTA HY" },
    {
      id: 54,
      src: "/music/Audios-music/danish.mobile.zone.dei (46).mp3",
      title: "DARD MUJHY HOTA ",
    },
    { id: 55, src: "/music/Audios-music/DEAR.mp3", title: "AK MASOM CHAHRA" },
    {
      id: 56,
      src: "/music/Audios-music/Deewana_Main_Tera_.mp3",
      title: "Deewana_Main_Tera",
    },
    {
      id: 57,
      src: "/music/Audios-music/Devil-Yaar_Naa_Miley__Kick_Official_.mp3",
      title: "Devil-Yaar_Naa_Miley",
    },
    {
      id: 58,
      src: "/music/Audios-music/DHERE DHERE PYAR KO.mp3",
      title: "DHERE DHERE PYAR",
    },
    {
      id: 59,
      src: "/music/Audios-music/Dhola_Sada_Dil__Mehak_Malik__New_Dance_Performance__Shaheen_Studio(256k).mp3",
      title: "Dhola_Sada_Dil",
    },
    { id: 60, src: "/music/Audios-music/DIL LA GAE.mp3", title: "DIL LA GAE" },
    {
      id: 61,
      src: "/music/Audios-music/DIL LAGANI KI.mp3",
      title: "DIL LAGANI KI",
    },
    {
      id: 62,
      src: "/music/Audios-music/DIL MUQADAR SE.mp3",
      title: "DIL MUQADAR SE",
    },
    {
      id: 63,
      src: "/music/Audios-music/DIL NAY DIL SE KAY KAHA,IFTIKHAR..mp3",
      title: "DIL NAY DIL SE",
    },
    {
      id: 65,
      src: "/music/Audios-music/DIL PARDESI HO GAYA_BALOUCH.mp3",
      title: "DIL PARDESI HO",
    },
    {
      id: 66,
      src: "/music/Audios-music/dil pe tere apne pyar.mp3",
      title: "DIL PY TERY PYAR",
    },
    {
      id: 67,
      src: "/music/Audios-music/Dunya men hum.mp3",
      title: "Dunya men hum",
    },
    {
      id: 68,
      src: "/music/Audios-music/Dup(01)A  H  A  H  A  H aaa.mp3",
      title: "BAT KAHON DILDARA",
    },
    {
      id: 69,
      src: "/music/Audios-music/Dup(01)JEENA  SIRF MERE  LIYE.mp3",
      title: "JEENA SIRF MERE",
    },
    {
      id: 70,
      src: "/music/Audios-music/Dup(01)NIHALL~1.mp3",
      title: "MERI SAS YAR KY",
    },
    {
      id: 71,
      src: "/music/Audios-music/Dup(01AAAAA.mp3",
      title: "HAYE O RIBA",
    },
    {
      id: 72,
      src: "/music/Audios-music/GEYEN TO GENYE.mp3",
      title: "GEYEN TO GENYE",
    },
    {
      id: 73,
      src: "/music/Audios-music/GHOGHAT ME CHAND HOGA [AS].mp3",
      title: "GHOGHAT ME CHAND",
    },
    {
      id: 74,
      src: "/music/Audios-music/GHOONGHAT KI.mp3",
      title: "GHOONGHAT KI ARR",
    },
    {
      id: 75,
      src: "/music/Audios-music/Halo Re(MyMp3Song).mp3",
      title: "HALO RE HALO",
    },
    {
      id: 76,
      src: "/music/Audios-music/Haye Dil(MyMp3Song).mp3",
      title: "Haye Dil",
    },
    { id: 77, src: "/music/Audios-music/hhhhhhh.mp3", title: "HAR PAL MERI" },
    {
      id: 78,
      src: "/music/Audios-music/Hum Khush Hue(K@$H@N).mp3",
      title: "Hum Khush Hue",
    },
    {
      id: 79,
      src: "/music/Audios-music/hum ko tum se payear. howa he. .mp3",
      title: "hum ko tum se",
    },
    {
      id: 80,
      src: "/music/Audios-music/Humko Hami Se Ch (1).mp3",
      title: "Humko Hami Se Ch",
    },
    {
      id: 81,
      src: "/music/Audios-music/humsafir ke.mp3",
      title: "HUMSAFIR KE",
    },
    {
      id: 82,
      src: "/music/Audios-music/INDEAN (28).mp3",
      title: "YE SUTAM NA HOTA",
    },
    {
      id: 83,
      src: "/music/Audios-music/IS PEYAR SE MERE TAR.mp3",
      title: "IS PEYAR SE MERE",
    },
    {
      id: 84,
      src: "/music/Audios-music/ISHAQ HAE TU_[R¤N] RN.mp3",
      title: "ISHAQ HAE TU",
    },
    {
      id: 85,
      src: "/music/Audios-music/Jab Tum Chaho(MyMp3Song).mp3",
      title: "Jab Tum Chaho",
    },
    {
      id: 86,
      src: "/music/Audios-music/JAN 03332566107.mp3",
      title: "DIL KI DHARKAN",
    },
    {
      id: 87,
      src: "/music/Audios-music/Jeene laga hoon    [{( LaL $aGaR Maharaj Kantia 0336-2094185  )}].mp3",
      title: "Jeene laga hoon",
    },
    {
      id: 88,
      src: "/music/Audios-music/jeeta hun jiske..dil wale.mp3",
      title: "JEETA HUN JISKE",
    },
    {
      id: 89,
      src: "/music/Audios-music/JEEWAN SATHI shahid khuwaja.mp3",
      title: "JEEWAN SATHI",
    },
    {
      id: 90,
      src: "/music/Audios-music/Judai  judai.mp3",
      title: "Judai Judai",
    },
    { id: 91, src: "/music/Audios-music/Kaha.mp3", title: "TUM PASS AYE" },
    {
      id: 92,
      src: "/music/Audios-music/KAHETA HAI PAL PAL.mp3",
      title: "KAHETA HAI PAL",
    },
    {
      id: 93,
      src: "/music/Audios-music/KASHIF zandgi m tujh p l0taoo.mp3",
      title: "KASHIF ZANDGI",
    },
    {
      id: 94,
      src: "/music/Audios-music/KESI SE TUM PYAR.mp3",
      title: "KESI SE TUM PYAR",
    },
    { id: 95, src: "/music/Audios-music/Koerksak.mp3", title: "CHAN CHAN CHAN" },
    {
      id: 96,
      src: "/music/Audios-music/KOI KAI PHACHANE.mp3",
      title: "SKOI KAI PHACHANE",
    },
    { id: 97, src: "/music/Audios-music/Kran arjun.mp3", title: "KRAN ARJUN" },
    {
      id: 98,
      src: "/music/Audios-music/LuV GuRU (31).mp3",
      title: "LuV GuRU",
    },
    {
      id: 99,
      src: "/music/Audios-music/MANAY  DIL TUMAY DE  SALMAN MEMON MZ 0333.2526879.mp3",
      title: "MANAY DIL TUMAY DE",
    },
    {
      id: 100,
      src: "/music/Audios-music/MaZHaR-03334440964- (14).mp3",
      title: "TERY ASEEN JUSAM",
    },
    {
      id: 101,
      src: "/music/Audios-music/MaZHaR-03334440964- (24).mp3",
      title: "O YARA KESI",
    },
    {
      id: 102,
      src: "/music/Audios-music/MaZHaR-03334440964- (31).mp3",
      title: "UN SY MUHBAT",
    },
    {
      id: 103,
      src: "/music/Audios-music/MaZHaR-03334440964- (103).mp3",
      title: "MERI ZANDGI",
    },
    {
      id: 104,
      src: "/music/Audios-music/MaZHaR-03334440964- (108).mp3",
      title: "HUM TUM SY NA",
    },
    {
      id: 105,
      src: "/music/Audios-music/Meray Sapno  k Raaj Kumar.mp3",
      title: "Meray Sapno k Raaj",
    },
    {
      id: 106,
      src: "/music/Audios-music/MERI TARAH TUM.mp3",
      title: "MERI TARAH TUM",
    },
    { id: 107, src: "/music/Audios-music/OSHONI~1.mp3", title: "SONYA HO OYA" },
    {
      id: 108,
      src: "/music/Audios-music/PANCHHI SUR MAIN GAATE HE.mp3",
      title: "/PANCHHI SUR MAIN",
    },
    {
      id: 109,
      src: "/music/Audios-music/PARTAB=JAN=0300=2348356 (27).mp3",
      title: "SHKWA NHE KSE",
    },
    {
      id: 110,
      src: "/music/Audios-music/Pyalian Hoooo.mp3",
      title: "Pyalian Hoooo",
    },
    {
      id: 111,
      src: "/music/Audios-music/Ranjhna Ve Ranjhna Men.mp3",
      title: "Ranjhna Ve",
    },
    {
      id: 112,
      src: "/music/Audios-music/SAJJAD ALI KING (3).mp3",
      title: "KAMRIYA LACHKY RY",
    },
    {
      id: 113,
      src: "/music/Audios-music/TANHAI TANHAI.mp3",
      title: "TANHAI TANHAI",
    },
    {
      id: 114,
      src: "/music/Audios-music/TERE NAAM...(^^karim jan^^).mp3",
      title: "TERE NAAM..",
    },
    {
      id: 115,
      src: "/music/Audios-music/Tere Naina Maar Hi Daalenge • Jai Ho Full HD Song • Salman Khan • Daisy Shah • Tabu_mpeg4.mp3",
      title: "STere Naina Maar",
    },
    {
      id: 116,
      src: "/music/Audios-music/TERI ANKUN ME.mp3",
      title: "TERI ANKUN ME",
    },
    {
      id: 117,
      src: "/music/Audios-music/Tumse_Mohabbat_Yuhi_Nibayenge_Hum_By_kum.mp3",
      title: "Tumse_Mohabbat_Yuhi",
    },
    {
      id: 118,
      src: "/music/Audios-music/VISHNO~1.mp3",
      title: "RAB NY BHE MUJH",
    },
    { id: 119, src: "/music/Audios-music/W.mp3", title: "TUJHY BHOLANA TO" },
    {
      id: 120,
      src: "/music/Audios-music/WAQAR COM BADIN = (112).mp3",
      title: "AK ZAHIR PAYALA",
    },
    {
      id: 121,
      src: "/music/Audios-music/WO LARKI BAHOT YAD ATE HAI[MZ].mp3",
      title: "WO LARKI BAHOT YAD",
    },
    {
      id: 122,
      src: "/music/Audios-music/Zamany Kay Dekahn.mp3",
      title: "ZAMANY KaAY DEKAHN",
    },
    {
      id: 123,
      src: "/music/Audios-music/Zandgi k bina p....mp3",
      title: "ZANDGI KO BINA P",
    },
    {
      id: 124,
      src: "/music/Audios-music/ZINDAGI KI TALASH MAIN HUM F@HEEM.mp3",
      title: "Zandgi ki Talash 124",
    },
  ];

  const videos = [
    {
      id: 1,
      video: "/music/channah.mp4",
    },
    {
      id: 2,
      video: "/music/BEST PRE WEDDING FILM 2024.mp4",
    },
    {
      id: 3,
      video: "/music/Enni sohni.mp4",
    },
    {
      id: 4,
      video: "/music/Kya Loge Tum.mp4",
    },
    {
      id: 5,
      video: "/music/Mor Tho Tiley.mp4",
    },
    {
      id: 6,
      video: "/music/Noor Official.mp4",
    },
    {
      id: 7,
      video: "/music/Mohd_Danish 10.mp4",
    },
    {
      id: 8,
      video: "/music/Nawal Khan 12.mp4",
    },
    {
      id: 9,
      video: "/music/Paani 11.mp4",
    },
    {
      id: 10,
      video: "/music/Panchhi 9.mp4",
    },
    {
      id: 11,
      video: "/music/PRE WEDDING 8.MP4",
    },
    {
      id: 12,
      video: "/music/Balma.mp4",
    },
    {
      id: 13,
      video: "/music/bara-lajpal-ali.mp4",
    },
    {
      id: 14,
      video: "/music/Prem.mp4",
    },
    {
      id: 15,
      video: "/music/Cham Cham.mp4",
    },
    {
      id: 16,
      video: "/music/Tu-Mere.mp4",
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
    <DashboardComponent>
      <div className="grid grid-cols-1 md:grid-cols-2 border-l gap-x-2 p-4 h-screen overflow-hidden">
        <div className=" touch-pan-y overflow-auto w-auto ">
          <div className="flex flex-col items-center rounded-lg mb-2 gap-1.5 mx-0.5">
            {audios.map((audio, id  ) => (
              <>
                <h2 className="" key={id}></h2>
                <H5AudioPlayer
                  src={audio.src}
                  autoPlay={false}
                  controls
                  className="w-full shadow-md"
                />
              </>
            ))}
          </div>
        </div>

        <Swiper
          direction={"vertical"}
          slidesPerView={"auto"}
          freeMode={true}
          scrollbar={true}
          mousewheel={true}
          modules={[FreeMode, Scrollbar, Mousewheel]}
        >
          {videos.map((video, id) => (
            <SwiperSlide
              key={id}
              className="flex flex-col items-center w-full bg-white rounded-lg shadow mb-2 border "
            >
               <video
                ref={(element) => (videoRefs.current[video.id] = element)}
                id={`video-${video.id}`}
                className="rounded-lg object-cover w-full h-full"
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </DashboardComponent>
  );
};

export default AllMusicPage;
