import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MovieList from "./components/MovieList";
import TrendingList from "./components/TrendingList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative bg-black">
      <NavBar />
      <Hero />
      <div className="relative pt-[50rem]">
        <MovieList title={"Netflix Originals"} />
        <MovieList title={"Trending Now"} />
        <TrendingList title={"Top 10 Movies"} />
        <Footer />
      </div>
    </div>
  );
}
