import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function TvShows() {
  return (
    <div className="relative bg-slate-950">
      <NavBar />
      <Hero />
      <div className="relative pt-[17rem]  md:pt-[42rem] xl:pt-[50rem]">
        <Footer />
      </div>
    </div>
  );
}
