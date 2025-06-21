import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import TVList from "../components/TVList";
import TrendingList from "../components/TrendingList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative bg-slate-950">
      <NavBar />
      <Hero />
      <div className="relative pt-[17rem]  md:pt-[42rem] xl:pt-[50rem]">
        <MovieList title={"Netvlix Movies"} />
        <TVList title={"Netvlix Tv Shows"} />
        <TrendingList title={"Top 10 Movies"} />
        <Footer />
      </div>
    </div>
  );
}
