import { FaBookmark, FaCamera, FaCog, FaTag, FaTh } from "react-icons/fa";
import img from "/images/jass.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const handleIconClick = () => {
    navigate('/settings');
  };
  const handleEditProfileClick= () => {
    navigate('/editProfile');
  };
  return (
    <div className="h-screen  p-4  text-white">
      {/* Profile Picture */}
      <div className="flex justify-center mb-4">
        <img
          className="w-24 h-24 rounded-full border-2 border-white"
          src={img}
          alt="Profile"
        />
      </div>

      {/* Profile Info Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2">
          _jass_bhatoa_
        </h1>
        <div className="flex justify-center items-center gap-4 mt-2">
          <button  onClick={handleEditProfileClick} className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-200">
            Edit Profile
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-200">
            View Archive
          </button>
          <FaCog
            onClick={handleIconClick}
            className="text-xl text-white hover:text-gray-400 transition duration-200 cursor-pointer"
          />
        </div>
      </div>

      {/* Profile Stats Section */}
      <div className="flex justify-center gap-10 mb-4">
        <div className="text-center">
          <p className="text-xl font-bold">0</p>
          <p>posts</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">757</p>
          <p>followers</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">250</p>
          <p>following</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="text-center mb-6">
        <p>جس بھٹوہ</p>
        <p>
          । ਬੇਬੇ ਬਾਪੂ 💯 ।
          <br /> #wmk🙏
          <br />। ਪੰਜਾਬ ⛳ ।
        </p>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center gap-8 border-t border-gray-700 py-2 mb-6 ">
        <div className="cursor-pointer flex items-center">
          <FaTh className="mr-2" />
          <span className="font-bold">POSTS</span>
        </div>
        <div className="cursor-pointer flex items-center">
          <FaBookmark className="mr-2" />
          <span>SAVED</span>
        </div>
        <div className="cursor-pointer flex items-center">
          <FaTag className="mr-2" />
          <span>TAGGED</span>
        </div>
      </div>

      {/* Share Photos Section */}
      <div className="flex flex-col items-center justify-center mb-6">
        <FaCamera className="text-5xl mb-2" />
        <h2 className="text-2xl font-bold">Share Photos</h2>
        <p className="mt-2">
          When you share photos, they will appear on your profile.
        </p>
        <a href="#" className="text-blue-500 font-bold mt-2 inline-block">
          Share your first photo
        </a>
      </div>
    </div>
  );
};

export default Profile;
