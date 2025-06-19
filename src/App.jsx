import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MovieList from "./components/MovieList";
import TrendingList from "./components/TrendingList";
import Footer from "./components/Footer";
import TVList from "./components/TVList";

export default function App() {
  return (
    <div className="relative bg-slate-950">
      <NavBar />
      <Hero />
      <div className="relative pt-[20rem] md:pt-[42rem] xl:pt-[50rem]">
        <MovieList title={"Netvlix Movies"} />
        {/* <MovieList title={"Netvlix Tv Shows"} /> */}
        <TVList title={"Netvlix Tv Shows"} />
        <TrendingList title={"Top 10 Movies"} />
        <Footer />
      </div>
    </div>
  );
}
