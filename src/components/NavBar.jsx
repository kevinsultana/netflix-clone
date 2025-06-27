import {
  FaMagnifyingGlass,
  FaChevronDown,
  FaRegHeart,
  FaBars,
} from "react-icons/fa6";
import logo from "../assets/logo.png";
import ava1 from "../assets/avatar/ava1.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const dataNavBar = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "TV Shows", path: "/tv-shows" },
    { id: 3, name: "Movies", path: "/movies" },
    { id: 4, name: "My List", path: "/my-list" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = () => {
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
      setShowSearchBar(false);
      setSearchInput("");
    }
  };

  return (
    <div
      className={`flex justify-between px-6 md:px-8 lg:px-14 py-4 items-center fixed top-0 left-0 right-0 z-20 ${
        scrolling ? "bg-black" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="flex gap-4 md:gap-12 items-center">
        <img
          src={logo}
          alt="logo"
          className="w-16 md:w-20 lg:w-24 object-contain"
        />

        <nav className="hidden md:block">
          <ul className="flex gap-4">
            {dataNavBar.map((item) => (
              <Link
                to={item.path}
                key={item.id}
                className="text-white hover:text-gray-300 transition"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>

        {/* Hamburger Menu mobile */}
        <div className="md:hidden">
          <FaBars
            className="text-white text-lg cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>

        {/* Dropdown Menu mobile */}
        {showMenu && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 rounded-2xl w-1/2 bg-black/90 text-white md:hidden transition-all duration-300 ease-out origin-top scale-y-100 opacity-100">
            <ul className="flex flex-col p-4">
              {dataNavBar.map((item) => (
                <li key={item.id} className="py-2">
                  <Link
                    to={item.path}
                    className="hover:text-gray-300 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="relative">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search..."
          autoFocus
          className={`px-3 py-1 rounded-full bg-white/10 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-white focus:bg-white/20 transition-all duration-300 ${
            showSearchBar ? "w-32 md:w-48 lg:w-60 opacity-100" : "w-0 opacity-0"
          }`}
        />
      </div>

      <div className="flex gap-4 md:gap-8 items-center">
        <FaMagnifyingGlass
          onClick={() => setShowSearchBar(!showSearchBar)}
          className="text-lg md:text-2xl text-white cursor-pointer hover:text-gray-300 transition-colors duration-200"
        />
        <Link to="/my-list">
          <FaRegHeart className="text-lg md:text-2xl text-white hover:text-red-500 transition-colors duration-200" />
        </Link>
        <button className="flex items-center gap-2 group">
          <img src={ava1} alt="avatar" className="w-6 md:w-8" />
          <FaChevronDown className="text-lg md:text-2xl text-white group-hover:rotate-180 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
