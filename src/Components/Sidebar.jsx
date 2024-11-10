import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo/pixgram.png";
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaVideo,
  FaEnvelope,
  FaHeart,
  FaPlusSquare,
  FaUserCircle,
  FaBars,
  FaCog,
  FaClipboardList,
  FaSun,
  FaExclamationTriangle,
  FaSignOutAlt,
  FaBookmark,
} from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoMdHelpBuoy } from "react-icons/io";
import { ReportProblem } from "./ReportProblem";
import Search from "./Search";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Sidebar menu items
  const menuItems = [
    { icon: <FaHome />, label: "Home", link: "/" },
    {
      icon: <FaSearch />,
      label: "Search",
      link: "#",
      onClick: () => setIsSearchActive(true),
    },
    { icon: <FaCompass />, label: "Explore", link: "/explore" },
    { icon: <FaVideo />, label: "Reels", link: "/reels" },
    { icon: <FaEnvelope />, label: "Messages", link: "/messages" },
    { icon: <FaHeart />, label: "Notifications", link: "/notifications" },
    { icon: <FaPlusSquare />, label: "Create", link: "/create" },
    { icon: <FaUserCircle />, label: "Profile", link: "/profile" },
    {
      icon: <FaBars />,
      label: "More",
      link: "#",
      onClick: () => setIsDropdownOpen(!isDropdownOpen),
    },
  ];

  const dropdownItems = [
    { icon: <FaCog />, label: "Settings", link: "/settings" },
    { icon: <FaBookmark />, label: "Saved", link: "/saved" },
    { icon: <FaClipboardList />, label: "Your Activity", link: "/activity" },
    { icon: <FaSun />, label: "Switch Appearance", link: "/settings" },
    {
      icon: <FaExclamationTriangle />,
      label: "Report a Problem",
      onClick: openModal,
    },
    { icon: <IoMdHelpBuoy />, label: "Help", link: "/help" },
  ];

  return (
    <div className="flex flex-col h-screen tracking-wide w-screen 2xl:my-4">
      {/* Profile Section */}
      <div className="flex my-2">
        <img src={logo} alt="Profile" className="w-[3vw] rounded-full" />
        <h1 className="text-2xl lg:text-3xl xl:text-4xl ml-2 tracking-wide font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#554295] via-[#EE2D31] to-[#F79421]">
          PixGram
        </h1>
      </div>

      {/* Navigation Menu */}
      {!isSearchActive ? (
        <nav className="flex flex-col space-y-4">
          {menuItems.map((item, index) => (
            <div key={index}>
              <Link
                to={item.link}
                onClick={item.onClick}
                className="flex items-center text-white hover:bg-gray-700 rounded p-2 transition duration-200 w-full"
              >
                <span className="text-2xl mr-4">{item.icon}</span>
                <span className="text-base">{item.label}</span>
              </Link>
              {item.label === "More" && isDropdownOpen && (
                <div className="bg-[#DFE7FD] rounded-md mt-2 w-full p-2">
                  {dropdownItems.map((dropdownItem, index) => (
                    <div key={index}>
                      <Link
                        to={dropdownItem.link}
                        onClick={dropdownItem.onClick}
                        className="flex items-center p-2.5 hover:bg-gray-700 transition duration-200 w-full"
                      >
                        <span className="text-xl mr-2">
                          {dropdownItem.icon}
                        </span>
                        <span className="text-base">{dropdownItem.label}</span>
                      </Link>
                    </div>
                  ))}
                  <div className="border-b-4 border-black" />
                  <div className="flex items-center p-2 hover:bg-gray-700 transition duration-200 w-full">
                    <MdManageAccounts className="text-xl mr-2" />
                    <span className="text-base">Switch Account</span>
                  </div>
                  <div className="flex items-center p-2 hover:bg-gray-700 transition duration-200 w-full">
                    <FaSignOutAlt className="text-xl mr-2" />
                    <span className="text-base">Log Out</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      ) : (
        <Search setIsSearchActive={setIsSearchActive} />
      )}

      {isModalOpen && <ReportProblem closeModal={closeModal} />}
    </div>
  );
};

export default Sidebar;
