import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies";
import Mylist from "./pages/Mylist";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/my-list" element={<Mylist />} />
      </Routes>
    </BrowserRouter>
  );
}
