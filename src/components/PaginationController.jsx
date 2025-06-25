import React from "react";

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
        Prev Page
      </button>
      <h1 className="text-2xl">
        {page} / {maxPage}
      </h1>
      <button
        onClick={onClickNext}
        className="bg-gray-600 px-4 py-2 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 active:bg-red-500  transition-all duration-300"
        disabled={page === maxPage}
      >
        Next Page
      </button>
    </div>
  );
}
