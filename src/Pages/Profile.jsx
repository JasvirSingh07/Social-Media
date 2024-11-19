import { FaBookmark, FaCamera, FaCog, FaTag, FaTh } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import img from "/images/img.jpg";

const Profile = () => {
  const [activeTab,setActiveTab] = useState();
  const navigate = useNavigate();
  const handleIconClick = () => {
    navigate("/settings");
  };
  const handleEditProfileClick = () => {
    navigate("/editProfile");
  };
  const tabs = [
    {
      tab: "Posts",
      icon: <FaTh className="mr-2" />,
      activeTab: "",
    },
    {
      tab: "Saved",
      icon: <FaBookmark className="mr-2" />,
      activeTab: "",
    },
    {
      tab: "Tagged",
      icon: <FaTag className="mr-2" />,
      activeTab: "",
    },
  ];

  return (
    <div className="h-screen p-2 ">
      {/* Profile Picture */}
      <div className="flex justify-center ">
        <img
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 border-white lg:w-32 lg:h-32"
          src={img}
          alt="Profile"
        />
      </div>

      {/* Profile Info Section */}
      <div className="text-center mb-2 sm:mb-4">
        <h1 className="text-xl font-extrabold text-white mb-2 sm:text-2xl  lg:text-3xl">
          _jass_bhatoa_
        </h1>
        <div className="flex justify-center items-center gap-4 mt-2">
          <button
            onClick={handleEditProfileClick}
            className="bg-gray-800 text-white px-4 py-0.5 rounded-md hover:bg-gray-700 transition duration-200 sm:px-6 sm:py-1.5"
          >
            Edit Profile
          </button>
          <button className="bg-gray-800 text-white px-4 py-0.5 rounded-md hover:bg-gray-700 transition duration-200 sm:px-6 sm:py-1.5">
            View Archive
          </button>
          <FaCog
            onClick={handleIconClick}
            className="text-xl  hover:text-gray-400 transition duration-200 cursor-pointer sm:text-2xl md:text-3xl"
          />
        </div>
      </div>

      {/* Profile Stats Section */}
      <div className="flex justify-center gap-10 mb-2 sm:mb-4">
        <div className="text-center">
          <p className="text-lg font-bold sm:text-xl lg:text-2xl">0</p>
          <p className="sm:text-lg md:text-xl">posts</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold sm:text-xl lg:text-2xl">757</p>
          <p className="sm:text-lg md:text-xl">followers</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold sm:text-xl lg:text-2xl">250</p>
          <p className="sm:text-lg md:text-xl">following</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="text-center mb-6">
        <p className="sm:text-lg md:text-xl">جس بھٹوہ</p>
        <p className="sm:text-lg md:text-xl">
          । ਬੇਬੇ ਬਾਪੂ 💯 ।<br /> #wmk🙏
          <br />۔ ਪੰਜਾਬ ⛳ ।
        </p>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center gap-8 border-t border-gray-700  mb-6 relative">
        {tabs.map((item,index) => {
         return <div onClick={()=>setActiveTab(item.tab)} key={index} className={`${activeTab===item.tab ? "border-t":"opacity-60"} cursor-pointer flex items-center sm:text-lg `}>
           {item.icon}
            <span className="font-bold">{item.tab}</span>
          </div>;
        })}
      </div>

      {/* Share Photos Section */}
      <div className="flex flex-col items-center justify-center mb-6">
        <FaCamera className="text-3xl mb-2 sm:text-5xl " />
        <h2 className="text-xl font-bold sm:text-2xl text-blue-500">
          Share Photos
        </h2>
        {/* <p className="mt-2 sm:text-lg md:text-xl">
          When you share photos, they will appear on your profile.
        </p> */}
        {/* <a href="#" className="text-blue-500 font-bold mt-2 inline-block sm:text-lg ">
          Share your first photo
        </a> */}
      </div>
    </div>
  );
};

export default Profile;
