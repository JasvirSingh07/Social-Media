import { AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaPlusSquare, FaVideo } from "react-icons/fa"; 

const navItems = [
  {
    id: 1,
    icon: <AiOutlineHome className="text-2xl text-white" />,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    icon: <FiSearch className="text-2xl text-white" />,
    label: "Search",
    path: "/explore",
  },
  {
    id: 3,
    icon: <FaPlusSquare className="text-2xl text-white" />, 
    label: "Create",
    path: "/create",
  },
  {
    id: 4,
    icon: <FaVideo className="text-2xl text-white" />,
    label: "Reels",
    path: "/reels",
  },
  {
    id: 5,
    icon: <CgProfile className="text-2xl text-white" />,
    label: "Profile",
    path: "/profile",
  },
];

const MobNav = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-[#0B0014] border-t border-gray-300 border-opacity-20">
      <div className="flex justify-around py-2">
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
