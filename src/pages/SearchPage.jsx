import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { BaseApi } from "../api/BaseApi";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ModalDetail from "../components/ModalDetail";
import { MagnifyingGlass } from "react-loader-spinner";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      const fetchSearchResults = async () => {
        setLoading(true);
        try {
          const res = await BaseApi.get(`/search/multi?query=${query}`);
          setResults(res.data.results);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } catch (error) {
          setLoading(false);
          console.error(error);
        }
      };
      fetchSearchResults();
    }
  }, [query]);

  // console.log(results);

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <NavBar />

      <main className="flex-1 pt-28 px-6 md:px-14 text-white">
        <h1 className="text-2xl font-bold mb-4">
          Search Results for: <span className="text-red-500">"{query}"</span>
        </h1>

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
            {results.map((item) =>
              item.poster_path ? (
                <div
                  className="rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in-out"
                  key={item.id}
                  onClick={() => setSelectedMovie(item)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    className="w-full h-90 object-cover mb-2"
                  />
                  <h2>{item.title || item.name}</h2>
                </div>
              ) : null
            )}
          </div>
        ) : null}
        {results.length === 0 && !loading && (
          <p className="text-gray-400 mt-8">No results found.</p>
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
