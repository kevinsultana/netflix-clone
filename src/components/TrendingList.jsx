import React from "react";
import TrendingCard from "./TrendingCard/TrendingCard";

export default function TrendingList({ title }) {
  const dataTrending = [
    {
      id: 1,
      name: "movie1",
    },
    {
      id: 2,
      name: "movie1",
    },
    {
      id: 3,
      name: "movie1",
    },
    {
      id: 4,
      name: "movie1",
    },
    {
      id: 5,
      name: "movie1",
    },
    {
      id: 6,
      name: "movie1",
    },
    {
      id: 7,
      name: "movie1",
    },
    {
      id: 8,
      name: "movie1",
    },
    {
      id: 9,
      name: "movie1",
    },
    {
      id: 10,
      name: "movie1",
    },
  ];
  return (
    <div className="text-white text-3xl relative pl-14 pb-10">
      <h1>{title}</h1>
      <div className="overflow-x-clip mt-4">
        <div className="flex gap-4">
          {dataTrending.map((item) => {
            return (
              <div key={item.id}>
                <TrendingCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
