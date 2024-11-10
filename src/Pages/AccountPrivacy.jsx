import { BsToggle2Off } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function AccountPrivacy() {
  const navigate = useNavigate();
  const handleBackArrowClick = () => {
    navigate('/settings');
  };
  return (
    <div className="text-white px-[2.5vw] 2xl:my-[2vw] space-y-2 h-screen">
      <div className="flex items-center gap-[2vw]">
      <MdArrowBackIosNew className="text-2xl" onClick={handleBackArrowClick}/>
        <h1 className="text-2xl font-bold">AccountPrivacy</h1>
      </div>
      <div className="flex justify-between items-center bg-[#DFE7FD] text-black rounded-lg p-[1vw]">
        <div className="w-9/12">
          <h2 className="text-xl">Private Account</h2>
          <p className="text-slate-600">
            When your account is public, your profile and posts can be seen by
            anyone, on or off Instagram, even if they do not have an Instagram
            account. When your account is private, only the followers you
            approve can see what you share, including your photos or videos on
            hashtag and location pages, and your followers and following lists.
            Certain info on your profile, like your profile picture and
            username, is visible to everyone on and off Instagram.
          </p>
        </div>
        <BsToggle2Off className="text-5xl" />
      </div>
    </div>
  );
}

export default AccountPrivacy;
