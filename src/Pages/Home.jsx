import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import SuggestedUsers from "../Components/SuggestedUsers";
import TagMentions from "./TagMentions";
import RestrictedAccounts from "./RestrictedAccounts";
import Blocked from "./Blocked";
import CloseFriends from "./CloseFriends";
import AccountPrivacy from "./AccountPrivacy";
import PasswordSecurity from "./PasswordSecurity";
import PersonalDetails from "./PersonalDetails";
import Help from "./Help";
import Settings from "./Settings";
import Profile from "./Profile";
import Create from "./Create";
import Messages from "./Messages";
import Reels from "./Reels";
import Explore from "./Explore";
import Feed from "../Components/Feed";
import EditProfile from "./EditProfile";
import { Notifications } from "./Notifications";
import MobNav from "../Components/MobNav";
import MobileTopNav from "../Components/MobileTopNav";
import Comments from "./Comments";
import MutedAccounts from "./MutedAccounts";
import Language from "./Language";

const Home = () => {
  const location = useLocation();
  return (
    <div className="flex w-full ">
      {/* Sidebar for large screens */}
      <div className="hidden sm:flex w-[20%] h-screen text-black fixed border-r border-r-black top-0 left-0">
        <Sidebar />
      </div>

      {/* Mobile Navigation */}
      <div className="w-full sm:hidden fixed bottom-0 z-50">
        <MobNav />
      </div>
      <div className="w-full top-0 px-[3vw] sm:hidden fixed z-50 bg-gray-50 border-b border-b-black">
        <MobileTopNav />
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-col sm:mt-0 w-full mx-auto sm:ml-[20%] ${
          location.pathname === "/" ? "sm:w-[50%]" : "sm:w-[85%]"
        } px-4 sm:px-0`}
      >
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/more" element={<Feed />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/personalDetails" element={<PersonalDetails />} />
          <Route path="/passwordSecurity" element={<PasswordSecurity />} />
          <Route path="/accountPrivacy" element={<AccountPrivacy />} />
          <Route path="/closeFriends" element={<CloseFriends />} />
          <Route path="/blocked" element={<Blocked />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/mutedAccounts" element={<MutedAccounts />} />
          <Route path="/restrictedAccounts" element={<RestrictedAccounts />} />
          <Route path="/tagsMentions" element={<TagMentions />} />
          <Route path="/language" element={<Language />} />
        </Routes>
      </div>

      {/* Suggested Users Section for Large Screens */}
      <div className="hidden sm:block fixed right-0 border-l w-[30%] border-l-black">
        <SuggestedUsers />
      </div>
    </div>
  );
};

export default Home;
