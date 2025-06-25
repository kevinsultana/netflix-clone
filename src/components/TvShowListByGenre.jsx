import { useState } from "react";
import { TvShowGenre } from "../constants/TvShowGenre";
import { BaseApi } from "../api/BaseApi";
import logoGlitch from "../assets/logoGlitch.png";
import { MagnifyingGlass } from "react-loader-spinner";
import PaginationController from "./PaginationController";

export default function TvShowListByGenre({ onClick }) {
  const [search, setSearch] = useState("");
  const [filteredGenres, setFilteredGenres] = useState(TvShowGenre);
  const [selectedGenre, setSelectedGenre] = useState({});
  const [dataByGenre, setDataByGenre] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(null);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filtered = TvShowGenre.filter((genre) =>
      genre.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredGenres(filtered);
  };

  const handleSubmitGenre = async (genre, page) => {
    setLoading(true);
    setDataByGenre([]);
    setSelectedGenre(genre);
    setPage(page);
    const id = genre.id;
    try {
      const response = await BaseApi.get(
        `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${id}`
      );
      const result = response.data.results;
      const totalPages = response.data.total_pages;
      console.log(response.data.page);
      setMaxPage(totalPages);
      setDataByGenre(result);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1) return;
    if (newPage > maxPage) return;
    setPage(newPage);
    handleSubmitGenre(selectedGenre, newPage);
  };

  return (
    <div className="text-white relative pl-6 md:pl-14 pb-14 group">
      <div className="mb-6 flex items-center gap-4 justify-center">
        <h1 className="text-4xl font-bold mb-2">TV Show Genre</h1>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search genre..."
          className="p-2 text-2xl rounded bg-gray-800 text-white outline-none w-1/6 max-w-md"
        />
      </div>

      <div
        className={
          filteredGenres.length < 8
            ? "flex justify-center flex-wrap gap-4"
            : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 pr-6"
        }
      >
        {filteredGenres.length > 0 ? (
          filteredGenres.map((genre) => (
            <div
              onClick={() => handleSubmitGenre(genre, 1)}
              key={genre.id}
              className={
                selectedGenre.name === genre.name
                  ? "p-3 text-xl bg-gray-600 rounded cursor-pointer"
                  : "p-3 text-xl bg-gray-700 rounded hover:bg-gray-600 cursor-pointer"
              }
            >
              {genre.name}
            </div>
          ))
        ) : (
          <p className="text-gray-400">No genre found.</p>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center mt-12">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : (
        <div className="my-6">
          {selectedGenre.name && (
            <h1 className="text-4xl font-bold mb-2">
              {selectedGenre.name} Tv Shows
            </h1>
          )}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pr-6">
            {dataByGenre.map((movie) => (
              <div
                onClick={() => onClick(movie)}
                key={movie.id}
                className="p-3 text-xl hover:scale-110 cursor-pointer transition-all duration-300"
              >
                <img
                  src={logoGlitch}
                  alt="logo-glitch"
                  className="absolute w-8 mt-2 ml-2"
                />
                <img
                  src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                  alt={movie.name}
                  className="w-full h-full  object-cover rounded-xl"
                />
                <h1 className="relative bottom-7 pl-2 bg-black/40 text-lg">
                  {movie.name}
                </h1>
              </div>
            ))}
          </div>
          {dataByGenre.length > 0 && (
            <PaginationController
              maxPage={maxPage}
              page={page}
              onClickPrev={() => handlePageChange(page - 1)}
              onClickNext={() => handlePageChange(page + 1)}
            />
          )}
        </div>
      )}
    </div>
  );
}
