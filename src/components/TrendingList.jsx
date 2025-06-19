import React from "react";
import TrendingCard from "./TrendingCard/TrendingCard";
import { DataPopular } from "../constants/DataPopular";

export default function TrendingList({ title }) {
  return (
    <div className="text-white text-3xl relative pl-14 pb-10">
      <h1>{title}</h1>
      <div className="overflow-x-clip mt-12">
        <div className="flex gap-4">
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
