import { useLocation } from "react-router-dom";
import img from "/images/img.jpg";
import { UsersData } from "../Utility/UsersData";

const SuggestedUsers = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const pathsWithoutSuggestUsers = [
    "/search",
    "/explore",
    "/reels",
    "/notifications",
    "/create",
    "/profile",
    "/more",
    "/messages",
    "/settings",
    "/editProfile",
    "/passwordSecurity",
    "/personalDetails",
    "/accountPrivacy",
    "/closeFriends",
    "/blocked",
    "/restrictedAccounts",
    "/help",
    "/tagsMentions",
    "/comments",
    "/mutedAccounts",
    "/language",
  ];

  const shouldSuggestUsers = !pathsWithoutSuggestUsers.includes(pathname);

  if (!shouldSuggestUsers) {
    return null;
  }

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 text-center mr-2 md:mr-4">
          <img
            src={img}
            alt="profile"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover "
          />
        </div>
        <div className="text-sm md:text-lg">jass_bhatoa_</div>
        <div className="text-blue-500 ml-auto text-xs md:text-base cursor-pointer">
          Switch
        </div>
      </div>

      {/* Suggested for you Text */}
      <div className="text-gray-500 mb-4 text-sm md:text-base">
        Suggested for you
      </div>

      {/* Suggested Users List */}
      <div className="space-y-4">
        {UsersData.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between sm:space-x-4 md:space-x-6"
          >
            <div className="flex items-center space-x-2 md:space-x-3">
              <img
                src={user.dp}
                alt="user profile"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover"
              />
              <div className="text-sm sm:text-base">
                {user.username}
              </div>
            </div>
            <div className="text-blue-500 text-xs sm:text-sm md:text-base cursor-pointer">
              {user.follow}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedUsers;
