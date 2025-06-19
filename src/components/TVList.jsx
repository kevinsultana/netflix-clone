import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import { DataTvShow } from "../constants/DataTvShows";

export default function TVList({ title }) {
  return (
    <div className="text-white text-3xl relative pl-14 pb-14">
      <h1>{title}</h1>
      <div className="overflow-x-clip mt-4">
        <div className="flex gap-2">
          {DataTvShow.results.map((item) => {
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
