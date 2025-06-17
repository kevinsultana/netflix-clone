import { FaMagnifyingGlass, FaChevronDown, FaRegBell } from "react-icons/fa6";
import logo from "../assets/logo.png";
import ava1 from "../assets/avatar/ava1.png";

export default function NavBar() {
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

  return (
    <div className="flex justify-between px-14 py-4 items-center fixed top-0 left-0 right-0 ">
      <div className="flex gap-12 items-center">
        <img src={logo} alt="logo" className="w-24 object-contain" />
        <nav>
          <ul className="flex gap-4">
            {dataNavBar.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-6 items-center">
        <FaMagnifyingGlass className="text-2xl text-black" />
        <FaRegBell className="text-2xl text-black" />
        <button className="flex items-center gap-2">
          <img src={ava1} alt="avatar" className="w-8" />
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
}
