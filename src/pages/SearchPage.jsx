import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import MovieCard from "../components/MovieCard/MovieCard";
import { BaseApi } from "../api/BaseApi";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const fetchSearchResults = async () => {
        try {
          const res = await BaseApi.get(`/search/multi?query=${query}`);
          setResults(res.data.results);
        } catch (err) {
          console.error("Search error:", err);
        }
      };
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <NavBar />

      <main className="flex-1 pt-28 px-6 md:px-14 text-white">
        <h1 className="text-2xl font-bold mb-4">
          Search Results for: <span className="text-red-500">"{query}"</span>
        </h1>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {results.map((item) =>
              item.poster_path ? <MovieCard key={item.id} data={item} /> : null
            )}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}
