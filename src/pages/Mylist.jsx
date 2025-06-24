import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FavoriteList from "../components/FavoriteList";

export default function Mylist() {
  return (
    <div className="relative bg-slate-900">
      <NavBar />
      {/* <Hero /> */}
      <div className="relative pt-[6rem]">
        <FavoriteList />
        <Footer />
      </div>
    </div>
  );
}
