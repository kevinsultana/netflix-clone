import React, { useRef } from "react";
import TrendingCard from "./TrendingCard/TrendingCard";
import { DataPopular } from "../constants/DataPopular";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function TrendingList({ title, data, onClick }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -480, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 480, behavior: "smooth" });
    }
  };

  return (
    <div className="text-white relative pl-6 md:pl-14 pb-6 group">
      <h1 className="font-bold text-lg md:text-4xl mb-4">{title}</h1>

      {/* Tombol kiri */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex bg-black/60 p-2 rounded-full transition-all duration-300"
      >
        <FaChevronLeft size={20} />
      </button>

      <div className="overflow-x-hidden">
        <div
          ref={scrollRef}
          className="flex gap-2 p-3 transition-all duration-300 scroll-smooth overflow-x-auto scrollbar-hide"
        >
          {data?.slice(1, 11).map((item, index) => (
            <div key={item.id} className="flex-shrink-0 h-42">
              <TrendingCard data={item} index={index} onClick={onClick} />
            </div>
          ))}
        </div>
      </div>

      {/* Tombol kanan */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex bg-black/60 p-2 rounded-full transition-all duration-300"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}
