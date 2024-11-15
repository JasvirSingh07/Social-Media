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
import {Notifications} from "./Notifications";
import MobNav from "../Components/MobNav";
import MobileTopNav from "../Components/MobileTopNav";
import Comments from "./Comments";
import MutedAccounts from "./MutedAccounts";
import Language from "./Language";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <div className="flex w-full  bg-[#0B0014]">
        <div className="hidden sm:flex w-[20%] h-screen text-white fixed border-r border-r-gray-300 border-opacity-20 top-0 left-0">
          <Sidebar />
        </div>
        <div className="w-full bottom-0 fixed border-b border-b-[#1d1d1d] sm:hidden block z-50 ">
          <MobNav />
        </div>
        <div className="w-full top-0 px-[3vw] py-[2.5vw] bg-[#0B0014] fixed text-white sm:hidden block z-50 ">
          <MobileTopNav />
        </div>

        {/* Main Content Section */}
        <div
          className={`flex flex-col mt-8 sm:mt-0 w-full mx-auto sm:ml-[20%] ${
            location.pathname == "/" ? "sm:w-[50%]" : "w-[85%]"
          } sm:overflow-y-auto scrollbar-hide `}
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
            <Route
              path="/restrictedAccounts"
              element={<RestrictedAccounts />}
            />
            <Route path="/tagsMentions" element={<TagMentions />} />
            <Route path="/language" element={<Language />} />
          </Routes>
        </div>

        <div
          className={`hidden sm:block fixed right-0 border-l w-[30%]  border-l-gray-300 border-opacity-20 `}
        >
          <SuggestedUsers />
        </div>
      </div>
    </>
  );
};

export default Home;
