import React from "react";
import Logo from "../../assets/logoGlitch.png";

export default function MovieCard({ data }) {
  const { title, backdrop_path, name } = data;
  return (
    <div className="w-40 h-24  md:w-60 md:h-34 rounded-xl">
      <img
        src={Logo}
        alt="logo"
        className="w-3 md:w-5 absolute top-14 md:top-16 ml-2"
      />
      <img
        src={`https://image.tmdb.org/t/p/w780${backdrop_path}`}
        alt={title ? title : name}
        className="w-full h-full object-cover rounded-xl"
      />
      <h1 className="text-xs md:text-base text-wrap px-2 py-1">
        {title ? title : name}
      </h1>
    </div>
  );
}
