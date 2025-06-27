import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { DataTvShow } from "../constants/DataTvShows";
import TrendingList from "../components/TrendingList";
import ModalDetail from "../components/ModalDetail";
import TvShowListByGenre from "../components/TvShowListByGenre";
import { useFetchMedia } from "../hooks/useFetchMedia";

export default function TvShows() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { trendingTvShow } = useFetchMedia("/trending/tv/day?language=en-US");

  return (
    <div className="relative bg-slate-900">
      <NavBar />
      <Hero data={trendingTvShow ? trendingTvShow : DataTvShow.results} />
      <div className="relative pt-[17rem] md:pt-[35rem] xl:pt-[45rem] 2xl:pt-[60rem]">
        <TrendingList
          title="Trending Tv Shows"
          data={trendingTvShow ? trendingTvShow : DataTvShow.results}
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
