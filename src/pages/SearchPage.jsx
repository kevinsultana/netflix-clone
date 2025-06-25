import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { BaseApi } from "../api/BaseApi";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ModalDetail from "../components/ModalDetail";
import { MagnifyingGlass } from "react-loader-spinner";
import PaginationController from "../components/PaginationController";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(null);
  const [mediaType, setMediaType] = useState("movie");

  const fetchSearchResults = async () => {
    setLoading(true);
    try {
      const res = await BaseApi.get(
        `/search/${mediaType}?query=${query}&include_adult=false&language=en-US&page=${page}`
      );
      const dataResults = res.data.results;
      const totalPages = res.data.total_pages;
      setMaxPage(totalPages);
      setResults(dataResults);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  useEffect(() => {
    setMediaType("movie");
  }, []);

  useEffect(() => {
    if (query) {
      fetchSearchResults();
    }
  }, [query, mediaType, page]);

  // console.log(results);
  const handlePageChange = (newPage) => {
    if (newPage < 1) return;
    if (newPage > maxPage) return;
    setPage(newPage);
    fetchSearchResults();
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <NavBar />

      <main className="flex-1 pt-28 px-6 md:px-14 text-white">
        <div className="flex items-center gap-8 mb-6">
          <h1 className="text-2xl font-bold ">
            Search Results for: <span className="text-red-500">"{query}"</span>
          </h1>
          <div>
            <label for="media_type" className="mr-2 text-xl">
              Search By:
            </label>
            <select
              className="text-white text-xl border border-white/20 rounded-md px-2 py-1"
              name="media_type"
              id="media_type"
              onChange={() =>
                setMediaType(document.getElementById("media_type").value)
              }
              value={mediaType}
            >
              <option value="movie" className="text-black text-lg ">
                Movies
              </option>
              <option value="tv" className="text-black text-lg ">
                TV Shows
              </option>
            </select>
          </div>
        </div>

        {loading && (
          <div className="flex flex-col justify-center items-center ">
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
            <p className="ml-2">Loading...</p>
          </div>
        )}

        {!loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {results.map((item) => (
              <div
                className="rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in-out"
                key={item.id}
                onClick={() => setSelectedMovie(item)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w780${
                    item.poster_path || item.backdrop_path
                  }`}
                  alt={item.title}
                  className="w-full h-90 object-cover mb-2"
                />
                <h2>{item.title || item.name}</h2>
              </div>
            ))}
          </div>
        ) : null}
        {results.length === 0 && !loading && (
          <p className="text-gray-400 mt-8">No results found.</p>
        )}

        {!loading && results.length > 0 && (
          <PaginationController
            page={page}
            maxPage={maxPage}
            onClickPrev={() => handlePageChange(page - 1)}
            onClickNext={() => handlePageChange(page + 1)}
          />
        )}
      </main>
      <Footer />
      {selectedMovie && (
        <ModalDetail
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          media_type={selectedMovie.media_type}
        />
      )}
    </div>
  );
}
