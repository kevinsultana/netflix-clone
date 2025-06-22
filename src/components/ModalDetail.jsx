import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GenreData } from "../constants/Genre";
import { BaseApi } from "../api/BaseApi";
import { FaHeart } from "react-icons/fa6";

export default function ModalDetail({ movie, onClose, media_type }) {
  const [videoKey, setVideoKey] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!movie) return null;

  const { title, name, overview, backdrop_path, genre_ids, id } = movie;

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

  const getVideo = async () => {
    try {
      const response = await BaseApi.get(`/${media_type}/${id}/videos`);
      const trailer = response.data.results.filter(
        (item) => item.site === "YouTube" && item.type === "Trailer"
      );
      if (trailer.length > 0) {
        setVideoKey(trailer[0].key);
      }
      // console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getVideo();
    }, 1500);
  }, [id]);

  const handleFavorite = () => {
    const saved = JSON.parse(localStorage.getItem("favorite")) || [];
    const exists = saved.some((item) => item.id === movie.id);
    let updated;

    if (exists) {
      updated = saved.filter((item) => item.id !== movie.id);
      setIsFavorite(false);
    } else {
      updated = [...saved, movie];
      setIsFavorite(true);
    }

    localStorage.setItem("favorite", JSON.stringify(updated));
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorite")) || [];
    const exists = saved.some((item) => item.id === id);
    setIsFavorite(exists);
  }, [id]);

  return (
    <div className="fixed inset-0 z-40 bg-black/80 flex items-center justify-center px-4">
      <div className="bg-gray-900 text-white rounded-lg w-full max-w-3xl overflow-hidden shadow-lg relative p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-500 p-2 rounded-full text-2xl z-50 cursor-pointer"
        >
          <FaTimes />
        </button>

        {videoKey && (
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-100"
          ></iframe>
        )}
        {videoKey === null && (
          <img
            src={`https://image.tmdb.org/t/p/w780${backdrop_path}`}
            alt={title || name}
            className="w-full h-100 object-cover"
          />
        )}

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{title || name}</h2>
            <button
              onClick={handleFavorite}
              className={`p-2 rounded-full ${
                isFavorite ? "bg-slate-600" : "bg-slate-400"
              } transition-colors duration-300`}
            >
              <FaHeart
                className={
                  isFavorite ? "text-red-500 text-xl" : "text-white text-xl"
                }
              />
            </button>
          </div>
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
