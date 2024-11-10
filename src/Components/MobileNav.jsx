import { FaHome, FaSearch, FaCompass, FaVideo, FaUserCircle } from "react-icons/fa";

const MobileNav = () => {
  const navItems = [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaSearch />, label: "Search" },
    { icon: <FaCompass />, label: "Explore" },
    { icon: <FaVideo />, label: "Reels" },
    { icon: <FaUserCircle />, label: "Profile" },
  ];

  return (
    <nav className="w-full bg-black p-4 fixed bottom-0 left-0 flex justify-around md:hidden">
      {navItems.map((item, index) => (
        <a key={index} href="#" className="text-white">
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

export default MobileNav;
