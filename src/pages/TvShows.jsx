import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { DataTvShow } from "../constants/DataTvShows";

export default function TvShows() {
  return (
    <div className="relative bg-slate-950">
      <NavBar />
      <Hero data={DataTvShow.results} />
      <div className="relative pt-[17rem]  md:pt-[42rem] xl:pt-[50rem]">
        <Footer />
      </div>
    </div>
  );
}
