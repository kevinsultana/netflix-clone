import React from "react";

export default function MovieCard({ name }) {
  return (
    <div className="w-60 h-36 bg-slate-300 rounded-md">
      <h1 className="">{name}</h1>
    </div>
  );
}
