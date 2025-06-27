import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { DataMovie } from "../constants/DataMovie";
import TrendingList from "../components/TrendingList";
import ModalDetail from "../components/ModalDetail";
import MovieListByGenre from "../components/MovieListByGenre";
import { useFetchMedia } from "../hooks/useFetchMedia";

export default function Movies() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { data: trendingMovie } = useFetchMedia(
    "/trending/movie/day?language=en-US"
  );

  return (
    <div className="relative bg-slate-900">
      <NavBar />
      <Hero data={trendingMovie ? trendingMovie : DataMovie.results} />
      <div className="relative pt-[17rem] md:pt-[30rem] xl:pt-[40rem] 2xl:pt-[55rem]">
        <TrendingList
          title="Trending Tv Shows"
          data={trendingMovie ? trendingMovie : DataMovie.results}
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
