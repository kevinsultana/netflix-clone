import React, { useEffect, useState } from "react";
import ModalDetail from "./ModalDetail";
import logoGlitch from "../assets/logoGlitch.png";

export default function FavoriteList() {
  const [favorites, setFavorites] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorite")) || [];
    setFavorites(stored);
  }, [selectedMovie]);

  return (
    <div className="text-white px-6 sm:px-12 md:px-14 lg:px-16 min-h-115">
      <h1 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">
        My List Movies and TV Shows
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-400 mt-8">
          You haven't added any favorites yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {favorites.map((item) => (
            <div
              onClick={() => setSelectedMovie(item)}
              key={item.id}
              className="m-1 md:p-3 text-xl hover:scale-110 cursor-pointer transition-all duration-300"
            >
              <img
                src={logoGlitch}
                alt="logo-glitch"
                className="absolute w-6 md:w-8 mt-2 ml-2"
              />
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
                className="w-full h-full  object-cover rounded-xl"
              />

              <h2 className="relative bottom-6 md:bottom-7 pl-2 bg-black/40 text-base md:text-lg text-white">
                {item.title || item.name}
              </h2>
            </div>
          ))}
        </div>
      )}
      {selectedMovie && (
        <ModalDetail
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
