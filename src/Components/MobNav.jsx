import { Link } from "react-router-dom";
import { FaHome, FaPlusSquare, FaSearch, FaUserCircle, FaVideo } from "react-icons/fa"; 
import {  } from "react-icons/bi";

const navItems = [
  {
    id: 1,
    icon: <FaHome className="text-2xl" />,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    icon: <FaSearch className="text-2xl" />,
    label: "Search",
    path: "/explore",
  },
  {
    id: 3,
    icon: <FaPlusSquare className="text-2xl" />, 
    label: "Create",
    path: "/create",
  },
  {
    id: 4,
    icon: <FaVideo className="text-2xl" />,
    label: "Reels",
    path: "/reels",
  },
  {
    id: 5,
    icon: <FaUserCircle className="text-2xl " />,
    label: "Profile",
    path: "/profile",
  },
];

const MobNav = () => {
  return (
    <nav className="fixed bottom-0 bg-gray-50 w-full block z-50  border-t border-t-black p-1">
      <div className="flex justify-around ">
        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.id}
            className="flex flex-col items-center"
            aria-label={item.label}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobNav;
