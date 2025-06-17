import React from "react";
import imgPlaceholder from "../../assets/placeholder.png";

export default function TrendingCard({ data }) {
  return (
    <div className="w-60 h-36 rounded-md flex justify-end">
      <div className="flex items-center">
        <h1 className="font-londrina text-[130px] text-white/30">{data.id}</h1>
        <img
          src={imgPlaceholder}
          alt="plcholder"
          className="w-28 h-40 right-3 relative"
        />
      </div>
    </div>
  );
}
