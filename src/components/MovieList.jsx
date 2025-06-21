import React, { useRef } from "react";
import MovieCard from "./MovieCard/MovieCard";
import { DataMovie } from "../constants/DataMovie";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MovieList({ title }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -480, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 480, behavior: "smooth" });
    }
  };

  return (
    <div className="text-white text-xl md:text-3xl relative pl-6 md:pl-14 pb-14 group">
      <h1 className="font-bold text-lg md:text-4xl mb-4">{title}</h1>

      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex bg-black/60 p-2 rounded-full"
      >
        <FaChevronLeft size={20} />
      </button>

      <div className="overflow-x-hidden">
        <div
          ref={scrollRef}
          className="flex gap-2 transition-all duration-300 scroll-smooth overflow-x-auto scrollbar-hide"
        >
          {DataMovie.results.map((item) => (
            <div key={item.id} className="flex-shrink-0">
              <MovieCard data={item} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex bg-black/60 p-2 rounded-full"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}
