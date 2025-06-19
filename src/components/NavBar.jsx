import {
  FaMagnifyingGlass,
  FaChevronDown,
  FaRegBell,
  FaRegHeart,
} from "react-icons/fa6";
import logo from "../assets/logo.png";
import ava1 from "../assets/avatar/ava1.png";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const dataNavBar = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "TV Shows",
    },
    {
      id: 3,
      name: "Movies",
    },
    {
      id: 4,
      name: "New & Popular",
    },
    {
      id: 5,
      name: "My List",
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
      className={`flex justify-between px-14 py-4 items-center fixed top-0 left-0 right-0 z-20 ${
        scrolling ? "bg-black" : "bg-transparent"
      } transition-all duration-300 delay-200`}
    >
      <div className="flex gap-12 items-center">
        <img src={logo} alt="logo" className="w-34 object-contain" />
        <nav>
          <ul className="flex gap-4">
            {dataNavBar.map((item) => (
              <li key={item.id} className="text-white">
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex gap-6 items-center">
        {showSearchBar && (
          <div className="flex w-2xs">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md w-full bg-white"
            />
          </div>
        )}
        <FaMagnifyingGlass
          onClick={() => setShowSearchBar(!showSearchBar)}
          className="text-2xl text-white cursor-pointer"
        />
        {/* <FaRegBell className="text-2xl text-white" /> */}
        <FaRegHeart className="text-2xl text-white" />
        <button className="flex items-center gap-2">
          <img src={ava1} alt="avatar" className="w-8" />
          <FaChevronDown className="text-lg text-white" />
        </button>
      </div>
    </div>
  );
}
