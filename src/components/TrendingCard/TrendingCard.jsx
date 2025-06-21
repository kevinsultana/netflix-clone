import React from "react";

export default function TrendingCard({ data, index }) {
  const { poster_path } = data;
  return (
    <div className="w-34 h-24 relative md:w-60 md:h-50 mt-4 md:mt-0 rounded-md flex justify-end pr-4">
      <div className="flex items-center">
        <h1 className="font-londrina text-[165px] text-white/40">
          {index + 1}
        </h1>
        <img
          src={`https://image.tmdb.org/t/p/w780${poster_path}`}
          alt="plcholder"
          className="w-36 h-50 object-cover rounded-md"
        />
      </div>
    </div>
  );
}
