import {
  FaMagnifyingGlass,
  FaChevronDown,
  FaRegBell,
  FaRegHeart,
  FaBars, // Menambahkan ikon hamburger
} from "react-icons/fa6";
import logo from "../assets/logo.png";
import ava1 from "../assets/avatar/ava1.png";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const dataNavBar = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "TV Shows",
      path: "/tv-shows",
    },
    {
      id: 3,
      name: "Movies",
      path: "/movies",
    },
    {
      id: 4,
      name: "My List",
      path: "/my-list",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between px-6 md:px-8 lg:px-14 py-4 items-center fixed top-0 left-0 right-0 z-20 ${
        scrolling ? "bg-black" : "bg-transparent"
      } transition-all duration-300 delay-200`}
    >
      <div className="flex gap-4 md:gap-12 items-center">
        <img
          src={logo}
          alt="logo"
          className="w-16 md:w-30 lg:w-34 object-contain"
        />

        <nav className="hidden md:block">
          <ul className="flex gap-4">
            {dataNavBar.map((item) => (
              <Link to={item.path} key={item.id} className="text-white">
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
          <div className="absolute top-15 left-50 rounded-2xl w-1/3 bg-black/90 text-white md:hidden">
            <ul className="flex flex-col p-4">
              {dataNavBar.map((item) => (
                <li key={item.id} className="py-2">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex gap-4 md:gap-8 items-center">
        {showSearchBar && (
          <div className="flex w-24 relative right-20">
            <input
              type="text"
              placeholder="Search..."
              className=" p-0.5 md:p-2 rounded-md bg-white"
            />
          </div>
        )}
        <FaMagnifyingGlass
          onClick={() => setShowSearchBar(!showSearchBar)}
          className="text-lg md:text-2xl text-white cursor-pointer"
        />
        {/* <FaRegBell className="text-2xl text-white" /> */}
        <FaRegHeart className="text-lg md:text-2xl text-white" />
        <button className="flex items-center gap-2">
          <img src={ava1} alt="avatar" className="w-6 md:w-8" />
          <FaChevronDown className="text-lg md:text-2xl text-white" />
        </button>
      </div>
    </div>
  );
}
