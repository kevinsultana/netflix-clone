import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { DataMovie } from "../constants/DataMovie";
import TrendingList from "../components/TrendingList";
import { BaseApi } from "../api/BaseApi";
import ModalDetail from "../components/ModalDetail";
import MovieListByGenre from "../components/MovieListByGenre";

export default function Movies() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [trendingMovie, setTrendingMovie] = useState([]);

  const getTrendingMovie = async () => {
    try {
      const response = await BaseApi.get("/trending/movie/day?language=en-US");
      const results = response.data.results;
      setTrendingMovie(results);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   getTrendingMovie();
  // }, []);

  return (
    <div className="relative bg-slate-950">
      <NavBar />
      <Hero
        // data={trendingTvShow}
        data={DataMovie.results}
      />
      <div className="relative pt-[17rem] md:pt-[42rem] xl:pt-[55rem]">
        <TrendingList
          title="Trending Tv Shows"
          // data={trendingTvShow}
          data={DataMovie.results}
          onClick={(movie) => setSelectedMovie(movie)}
        />
        <MovieListByGenre onClick={(movie) => setSelectedMovie(movie)} />
        <Footer />
      </div>
      {selectedMovie && (
        <ModalDetail
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          media_type={"movie"}
        />
      )}
    </div>
  );
}
