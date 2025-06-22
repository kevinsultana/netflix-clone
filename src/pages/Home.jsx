import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import TrendingList from "../components/TrendingList";
import Footer from "../components/Footer";
import { BaseApi } from "../api/BaseApi";

import { DataMovie } from "../constants/DataMovie";

import hero from "../assets/hero/hero.png";
import ModalDetail from "../components/ModalDetail";

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [trendingThisWeek, setTrendingThisWeek] = useState([]);
  const [topTenMovies, setTopTenMovies] = useState([]);
  const [topTenTvShows, setTopTenTvShows] = useState([]);
  const [trendingToday, setTrendingToday] = useState([]);

  const initData = [
    {
      backdrop_path: "/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg",
      title: "The Shawshank Redemption",
      overview:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      media_type: "movie",
    },
  ];

  const getTrendingAll = async () => {
    try {
      const response = await BaseApi.get("/trending/all/week?language=en-US");
      setTrendingThisWeek(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopTenMovies = async () => {
    try {
      const response = await BaseApi.get("/trending/movie/day?language=en-US");
      setTopTenMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopTenTvShows = async () => {
    try {
      const response = await BaseApi.get("/trending/tv/day?language=en-US");
      setTopTenTvShows(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrendingToday = async () => {
    try {
      const resonse = await BaseApi.get("/trending/all/day?language=en-US");
      setTrendingToday(resonse.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getTrendingToday();
  //   getTopTenMovies();
  //   getTrendingAll();
  //   getTopTenTvShows();
  // }, []);

  return (
    <div className="relative bg-slate-950">
      <NavBar />
      <Hero
        // data={trendingThisWeek}
        data={initData}
      />
      <div className="relative pt-[17rem] md:pt-[42rem] xl:pt-[55rem]">
        <MovieList
          title={"Trending Today"}
          // data={trendingToday}
          data={DataMovie.results}
          onClick={(movie) => setSelectedMovie(movie)}
        />
        <TrendingList
          title={"Top 10 Movies"}
          // data={topTenMovies}
          data={DataMovie.results}
          onClick={(movie) => setSelectedMovie(movie)}
        />
        <MovieList
          title={"Trending This Week"}
          // data={trendingThisWeek}
          data={DataMovie.results}
          onClick={(movie) => setSelectedMovie(movie)}
        />
        <TrendingList
          title={"Top 10 Tv Shows"}
          // data={topTenTvShows}
          data={DataMovie.results}
          onClick={(movie) => setSelectedMovie(movie)}
        />
        <Footer />
      </div>
      {selectedMovie && (
        <ModalDetail
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          media_type={selectedMovie.media_type === "movie" ? "movie" : "tv"}
        />
      )}
    </div>
  );
}
