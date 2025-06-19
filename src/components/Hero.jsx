import React from "react";
import hero from "../assets/hero/hero.png";
import logoGlitch from "../assets/logoGlitch.png";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Hero() {
  return (
    <div>
      {/* hero bg */}
      <div>
        <img
          src={hero}
          alt="Hero"
          className="w-full h-1/5 md:h-auto absolute z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
      </div>
      {/* hero text title */}
      <div className="absolute z-10 px-6 sm:px-12 md:px-14 lg:px-16 mt-20 sm:mt-32 md:mt-56 max-w-2xl">
        <div className="flex gap-4 items-center">
          <img
            src={logoGlitch}
            alt="logo-glitch"
            className="w-6 md:w-14 lg:w-24"
          />
          <p className="text-white uppercase font-bold text-base md:text-xl lg:text-3xl">
            s e r i e s
          </p>
        </div>

        <h1 className="text-white text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase">
          House of ninjas
        </h1>

        <p className="text-white my-4 sm:my-6 text-xs sm:text-lg md:text-xl">
          Years after retiring from their formidable ninja lives, a
          dysfunctional family must return to shadowy missions to counteract a
          string of looming threats.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black py-2 px-6 md:px-8 flex gap-2 items-center rounded-xl">
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
