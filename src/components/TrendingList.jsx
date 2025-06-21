import React, { useRef } from "react";
import TrendingCard from "./TrendingCard/TrendingCard";
import { DataPopular } from "../constants/DataPopular";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function TrendingList({ title, data, onClick }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = window.innerWidth > 768 ? 480 : 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="text-white  relative pl-6 md:pl-14 pb-14 group ">
      <h1 className="font-bold text-lg md:text-4xl mb-4">{title}</h1>

      {/* Tombol kiri */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden md:group-hover:flex bg-black/60 hover:bg-black p-2 rounded-full"
      >
        <FaChevronLeft size={20} />
      </button>

      <div className="overflow-x-clip">
        <div
          ref={scrollRef}
          className="flex gap-4 p-3 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-1 md:px-0 mr-12"
        >
          {data?.slice(0, 10).map((item, index) => (
            <div key={item.id} className="flex-shrink-0">
              <TrendingCard data={item} index={index} onClick={onClick} />
            </div>
          ))}
        </div>
      </div>

      {/* Tombol kanan */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden md:group-hover:flex bg-black/60 hover:bg-black p-2 rounded-full"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}
