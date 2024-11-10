import { useLocation } from "react-router-dom";
import img from "/images/jass.png";
import { UsersData } from "../Utility/UsersData";
const SuggestedUsers = () => {

  const location = useLocation();
  const pathname = location.pathname;
 
  const pathsWithoutFooter = [
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
   "/tagsMentions"
  ];

  const shouldRenderFooter = !pathsWithoutFooter.includes(pathname);

  if (!shouldRenderFooter) {
    return null;
  }


  return (
    <div className="p-4 hidden md:block">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 text-center mr-4">
        <img
            src={img}
            alt="img"
            className="w-10 h-10 rounded-full object-cover border-2"
          />
        </div>
        <div className="text-white">jass_bhatoa_</div>
        <div className="text-blue-500 ml-auto">Switch</div>
      </div>

      <div className="text-gray-500 mb-4">Suggested for you</div>
      <div className="space-y-4">
        {UsersData.map((user, index) => (
          <div key={index} className="flex items-center">
            <div className="flex-shrink-0 text-center mr-4">
            <img
            src={user.dp}
            alt="img"
            className="w-10 h-10 rounded-full object-cover border-2 "
          />
            </div>
            <div className="text-white">{user.username}</div>
            <div className="text-blue-500 ml-auto">{user.follow}</div>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default SuggestedUsers;
