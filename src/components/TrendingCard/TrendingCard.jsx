import React from "react";

export default function TrendingCard({ data, index, onClick }) {
  const { poster_path } = data;
  return (
    <div
      onClick={() => onClick(data)}
      className="w-34 h-24 md:w-60 md:h-70 mt-4 md:mt-0 rounded-md flex justify-end pr-4 cursor-pointer hover:scale-105 transition-all duration-300"
    >
      <div className="flex items-center">
        <h1 className="font-londrina text-[165px] text-white/40">
          {index + 1}
        </h1>
        <img
          src={`https://image.tmdb.org/t/p/w780${poster_path}`}
          alt="plcholder"
          className="w-46 h-60 object-cover rounded-md"
        />
      </div>
    </div>
  );
}
