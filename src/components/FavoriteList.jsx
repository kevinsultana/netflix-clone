import React, { useEffect, useState } from "react";
import ModalDetail from "./ModalDetail";

export default function FavoriteList() {
  const [favorites, setFavorites] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorite")) || [];
    setFavorites(stored);
  }, [selectedMovie]);

  return (
    <div className="text-white px-6 sm:px-12 md:px-14 lg:px-16 min-h-screen">
      <h1 className="font-bold text-lg md:text-4xl mb-4">
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
              className="bg-gray-800 rounded overflow-hidden hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
                className="w-full h-auto object-contain"
              />
              <div className="p-2">
                <h2 className="text-sm font-semibold">
                  {item.title || item.name}
                </h2>
              </div>
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
