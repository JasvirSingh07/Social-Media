import { FaFacebookMessenger, FaHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function MobileTopNav() {
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
      "/tagsMentions",
    ];
  
    const shouldRenderFooter = !pathsWithoutFooter.includes(pathname);
  
    if (!shouldRenderFooter) {
      return null;
    }
  return (
    <div className="flex items-center justify-between shadow-md ">
      <div className="text-xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#554295] via-[#EE2D31] to-[#F79421]">PixGram</div>
      <div className="flex space-x-4">
        <FaHeart className="text-white w-6 h-6" />
        <FaFacebookMessenger className="text-white w-6 h-6" />
      </div>
    </div>
  );
}

export default MobileTopNav;
