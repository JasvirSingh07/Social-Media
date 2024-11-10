import { Routes, Route } from "react-router-dom";
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
import Notifications from "./Notifications";

const Home = () => {
  return (
    <>
      <div className="flex w-full bg-[#0B0014]">
        <div className="hidden sm:flex w-[15%] h-screen fixed border-r  top-0 left-0">
          <Sidebar />
        </div>
        {/* Main Content Section */}
        <div
          className={`flex flex-col mt-8 sm:mt-0 w-full sm:ml-[15%] sm:w-[55%] sm:overflow-y-auto`}
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
            <Route
              path="/restrictedAccounts"
              element={<RestrictedAccounts />}
            />
            <Route path="/tagsMentions" element={<TagMentions />} />
          </Routes>
        </div>

        <div
          className={`hidden sm:block fixed right-0 border-l w-[30%]  border-l-customGray2 border-opacity-20`}
        >
          <SuggestedUsers />
        </div>
      </div>
    </>
  );
};

export default Home;
