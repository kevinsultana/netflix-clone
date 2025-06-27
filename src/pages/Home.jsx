import { useState } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import TrendingList from "../components/TrendingList";
import Footer from "../components/Footer";
import ModalDetail from "../components/ModalDetail";
import { useFetchMedia } from "../hooks/useFetchMedia";
import { DataMovie } from "../constants/DataMovie";

export default function Home() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const { data: trendingThisWeek } = useFetchMedia(
    "/trending/all/week?language=en-US"
  );
  const { data: topTenMovies } = useFetchMedia(
    "/trending/movie/day?language=en-US"
  );
  const { data: topTenTvShows } = useFetchMedia(
    "/trending/tv/day?language=en-US"
  );
  const { data: trendingToday } = useFetchMedia(
    "/trending/all/day?language=en-US"
  );

  const initData = [
    {
      backdrop_path: "/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg",
      title: "The Shawshank Redemption",
      overview:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      media_type: "movie",
    },
  ];

  return (
    <div className="relative bg-slate-900">
      <NavBar />
      <Hero data={trendingThisWeek.length > 0 ? trendingThisWeek : initData} />
      <div className="relative pt-[17rem] md:pt-[30rem] xl:pt-[40rem] 2xl:pt-[55rem]">
        <MovieList
          title={"Trending Today"}
          data={trendingToday.length > 0 ? trendingToday : DataMovie.results}
          onClick={(item) => setSelectedMedia(item)} // Changed movie to item
        />
        <TrendingList
          title={"Top 10 Movies"}
          data={topTenMovies.length > 0 ? topTenMovies : DataMovie.results}
          onClick={(item) => setSelectedMedia(item)} // Changed movie to item
        />
        <MovieList
          title={"Trending This Week"}
          data={
            trendingThisWeek.length > 0 ? trendingThisWeek : DataMovie.results
          }
          onClick={(item) => setSelectedMedia(item)} // Changed movie to item
        />
        <TrendingList
          title={"Top 10 Tv Shows"}
          data={topTenTvShows.length > 0 ? topTenTvShows : DataMovie.results}
          onClick={(item) => setSelectedMedia(item)} // Changed movie to item
        />
        <Footer />
      </div>
      {selectedMedia && (
        <ModalDetail
          mediaItem={selectedMedia} // Renamed movie to mediaItem
          onClose={() => setSelectedMedia(null)}
          media_type={selectedMedia.media_type === "movie" ? "movie" : "tv"}
        />
      )}
    </div>
  );
}
