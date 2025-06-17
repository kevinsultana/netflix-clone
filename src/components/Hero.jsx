import React from "react";
import hero from "../assets/hero/hero.png";
import logoGlitch from "../assets/logoGlitch.png";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Hero() {
  return (
    <div>
      <div>
        <img src={hero} alt="Hero" className="w-full h-fit absolute z-0" />
        <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
      </div>
      <div className="absolute z-10 px-14 mt-56 max-w-2xl">
        <div className="flex gap-4 items-center">
          <img src={logoGlitch} alt="logo-glitch" className="w-20" />
          <p className=" text-white uppercase font-bold text-2xl">
            s e r i e s
          </p>
        </div>
        <h1 className="text-white text-7xl font-bold uppercase">
          House of ninjas
        </h1>
        <p className="text-white my-6 text-lg">
          Years after retiring from their formidable ninja lives, a
          dysfunctional family must return to shadowy missions to counteract a
          string of looming threats.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black py-2 px-8 flex gap-2 items-center rounded-xl">
            <FaPlay />
            <span>Play</span>
          </button>
          <button className="bg-white/20 text-white py-2 px-8 flex gap-2 items-center rounded-xl">
            <IoIosInformationCircleOutline />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
