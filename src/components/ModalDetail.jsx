import React from "react";
import { FaTimes } from "react-icons/fa";
import { GenreData } from "../constants/Genre";

export default function ModalDetail({ movie, onClose }) {
  if (!movie) return null;

  const { title, name, overview, backdrop_path, genre_ids } = movie;
  // console.log(movie);

  const getGenreNames = (genreIds) => {
    const genreNames = [];
    genreIds.forEach((id) => {
      const genre = GenreData.find((genre) => genre.id === id);
      if (genre) {
        genreNames.push(genre.name);
      }
    });
    return genreNames;
  };

  return (
    <div className="fixed inset-0 z-40 bg-black/80 flex items-center justify-center px-4">
      <div className="bg-gray-900 text-white rounded-lg w-full max-w-3xl overflow-hidden shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl z-50"
        >
          <FaTimes />
        </button>

        <img
          src={`https://image.tmdb.org/t/p/w780${backdrop_path}`}
          alt={title || name}
          className="w-full h-100 object-cover"
        />

        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">{title || name}</h2>
          {getGenreNames(genre_ids).map((genre, index) => (
            <span
              key={index}
              className="text-sm text-gray-800 mr-2 bg-slate-200 py-1 px-2 rounded-full"
            >
              {genre}
            </span>
          ))}
          <p className="text-base text-gray-300 mt-4">{overview}</p>
        </div>
      </div>
    </div>
  );
}
