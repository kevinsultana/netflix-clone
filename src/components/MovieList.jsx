import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import { DataMovie } from "../constants/DataMovie";

export default function MovieList({ title }) {
  // const dataMovies = [
  //   {
  //     id: 1,
  //     name: "movie1",
  //   },
  //   {
  //     id: 2,
  //     name: "movie1",
  //   },
  //   {
  //     id: 3,
  //     name: "movie1",
  //   },
  //   {
  //     id: 4,
  //     name: "movie1",
  //   },
  //   {
  //     id: 5,
  //     name: "movie1",
  //   },
  //   {
  //     id: 6,
  //     name: "movie1",
  //   },
  //   {
  //     id: 7,
  //     name: "movie1",
  //   },
  //   {
  //     id: 8,
  //     name: "movie1",
  //   },
  //   {
  //     id: 9,
  //     name: "movie1",
  //   },
  //   {
  //     id: 10,
  //     name: "movie1",
  //   },
  // ];
  return (
    <div className="text-white text-xl md:text-3xl relative pl-6 md:pl-14 pb-14">
      <h1 className="font-bold text-lg md:text-4xl">{title}</h1>
      <div className="overflow-x-clip mt-4">
        <div className="flex gap-2">
          {DataMovie.results.map((item) => {
            return (
              <div key={item.id}>
                <MovieCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
