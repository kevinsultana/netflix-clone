import React from "react";
import TrendingCard from "./TrendingCard/TrendingCard";
import { DataPopular } from "../constants/DataPopular";

export default function TrendingList({ title }) {
  return (
    <div className="text-white relative pl-6 md:pl-14 pb-10">
      <h1 className="text-lg md:text-4xl font-bold">{title}</h1>
      <div className="overflow-x-clip mt-12">
        <div className="flex gap-16 md:gap-4">
          {DataPopular.results.map((item, index) => {
            return (
              <div key={item.id}>
                <TrendingCard data={item} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
