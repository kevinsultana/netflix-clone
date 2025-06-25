import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function PaginationController({
  page,
  maxPage,
  onClickPrev,
  onClickNext,
}) {
  return (
    <div className="flex items-center justify-center gap-8 mt-12">
      <button
        onClick={onClickPrev}
        className="bg-gray-600 px-4 py-2 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed  hover:bg-gray-700 active:bg-red-500 transition-all duration-300"
        disabled={page === 1}
      >
        <FaChevronLeft className="text-base md:text-xl" />
      </button>
      <h1 className="text-lg md:text-2xl">
        Page {page} of {maxPage}
      </h1>
      <button
        onClick={onClickNext}
        className="bg-gray-600 px-4 py-2 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 active:bg-red-500  transition-all duration-300"
        disabled={page === maxPage}
      >
        <FaChevronRight className="text-base md:text-xl" />
      </button>
    </div>
  );
}
