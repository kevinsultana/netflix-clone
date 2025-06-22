import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { DataTvShow } from "../constants/DataTvShows";
import TrendingList from "../components/TrendingList";
import { BaseApi } from "../api/BaseApi";
import ModalDetail from "../components/ModalDetail";
import TvShowListByGenre from "../components/TvShowListByGenre";

export default function TvShows() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [trendingTvShow, setTrendingTvShow] = useState([]);

  const getTrendingTvShow = async () => {
    try {
      const response = await BaseApi.get("/trending/tv/day");
      const results = response.data.results;
      setTrendingTvShow(results);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   getTrendingTvShow();
  // }, []);

  return (
    <div className="relative bg-slate-950">
      <NavBar />
      <Hero
        // data={trendingTvShow}
        data={DataTvShow.results}
      />
      <div className="relative pt-[17rem] md:pt-[42rem] xl:pt-[55rem]">
        <TrendingList
          title="Trending Tv Shows"
          // data={trendingTvShow}
          data={DataTvShow.results}
          onClick={(movie) => setSelectedMovie(movie)}
        />
        <TvShowListByGenre onClick={(movie) => setSelectedMovie(movie)} />
        <Footer />
      </div>
      {selectedMovie && (
        <ModalDetail
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          media_type={"tv"}
        />
      )}
    </div>
  );
}
