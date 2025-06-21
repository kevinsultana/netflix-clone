import React from "react";
import Logo from "../../assets/logoGlitch.png";

export default function MovieCard({ data, onClick }) {
  const { title, backdrop_path, name } = data;

  return (
    <div
      onClick={() => onClick(data)}
      className="w-40 md:w-60 cursor-pointer hover:scale-105 transition-all duration-300"
    >
      <div className="relative h-32 md:h-36 rounded-xl overflow-hidden">
        <img
          src={Logo}
          alt="logo"
          className="w-4 md:w-6 absolute top-2 left-2 z-10"
        />
        <img
          src={`https://image.tmdb.org/t/p/w780${backdrop_path}`}
          alt={title || name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-xs md:text-sm mt-2 text-white font-semibold px-1 line-clamp-2">
        {title || name}
      </h1>
    </div>
  );
}
