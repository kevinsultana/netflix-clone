import React from "react";
import logoGlitch from "../assets/logoGlitch.png";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Hero({ data }) {
  const heroData = data[0];

  return (
    <div>
      {/* hero bg */}
      <div className="absolute w-full h-[400px] md:h-svh ">
        <img
          src={`https://image.tmdb.org/t/p/w780${heroData?.backdrop_path}`}
          alt="Hero"
          className="w-full h-[260px] max-h-svh md:h-auto absolute z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
      </div>
      {/* hero text title */}
      <div className="absolute z-10 px-6 max-w-xs md:max-w-2xl sm:px-12 md:px-14 lg:px-16 mt-20 sm:mt-32 lg:mt-76  ">
        <div className="flex gap-4 items-center">
          <img
            src={logoGlitch}
            alt="logo-glitch"
            className="w-4 md:w-10 lg:w-24"
          />
          <p className="text-white uppercase font-bold text-xs md:text-lg lg:text-3xl">
            {heroData?.media_type === "movie" ? "m o v i e s" : "s e r i e s"}
          </p>
        </div>

        <h1 className="text-white text-md sm:text-3xl md:text-4xl lg:text-7xl font-bold uppercase">
          {heroData?.title || heroData?.original_title || heroData?.name}
        </h1>

        <p className="text-white my-2 sm:my-6 text-xs md:text-base max-h-19 md:max-h-max overflow-hidden">
          {heroData?.overview}
        </p>

        <div className="flex gap-4 pt-2 sm:pt-0">
          <button className="bg-white text-xs text-black py-1 px-6 md:px-8 flex gap-2 items-center rounded-xl">
            <FaPlay />
            <span className="hidden sm:inline">Play</span>
          </button>
          <button className="bg-white/20 text-white py-2 px-6 sm:px-8 flex gap-2 items-center rounded-xl">
            <IoIosInformationCircleOutline />
            <span className="hidden sm:inline">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
