import { FaBookmark, FaCamera, FaCog, FaTag, FaTh } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import img from "/images/img.jpg";
import img1 from "/images/img4.webp";
import img2 from "/images/virat.webp";
import img3 from "/images/img10.jpg";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Posts");

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
    },
    {
      tab: "Saved",
      icon: <FaBookmark className="mr-2" />,
    },
    {
      tab: "Tagged",
      icon: <FaTag className="mr-2" />,
    },
  ];

  const posts = [{ img: img }, { img: img1 }, { img: img2 }, { img: img3 }];
  const saved = [{ img: img1 }, { img: img2 }];
  const tagged = [{ img: img3 }, { img: img }, { img: img1 }];

  return (
    <div className="h-screen p-2 ">
      {/* Profile Picture */}
      <div className="flex justify-center ">
        <img
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white lg:w-28 lg:h-28"
          src={img}
          alt="Profile"
        />
      </div>
      {/* Profile Info Section */}
      <div className="text-center mb-2 sm:mb-4">
        <h1 className="text-xl font-extrabold  mb-2 sm:text-2xl  lg:text-3xl">
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
          ਬੇਬੇ ਬਾਪੂ 💯 <br /> #wmk🙏
          <br />۔ پنجاب ⛳ 
        </p>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center gap-8 border-t border-gray-700  mb-6 relative">
        {tabs.map((item, index) => (
          <div
            onClick={() => setActiveTab(item.tab)}
            key={index}
            className={`${
              activeTab === item.tab ? "border-t-2 border-gray-500" : "opacity-60"
            } cursor-pointer flex items-center sm:text-lg `}
          >
            {item.icon}
            <span className="font-bold">{item.tab}</span>
          </div>
        ))}
      </div>

      {/* Content Section - Conditional Rendering Based on Active Tab */}
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="flex-wrap flex gap-[1vw] lg:w-1/2">
          {activeTab === "Posts" &&
            posts.map((post, index) => (
              <div key={index} className="w-24 h-24 lg:h-48 lg:w-48">
                <img
                  src={post.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          {activeTab === "Saved" &&
            saved.map((post, index) => (
              <div key={index} className="w-24 h-24 lg:h-48 lg:w-48">
                <img
                  src={post.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          {activeTab === "Tagged" &&
            tagged.map((post, index) => (
              <div key={index} className="w-24 h-24 lg:h-48 lg:w-48">
                <img
                  src={post.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
