import { useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import CloseRestrictMutedTemp from "../Components/CloseRestrictMutedTemp";

function CloseFriends() {
  const navigate = useNavigate();
  const handleBackArrowClick = () => {
    navigate("/settings");
  };
  return (
    <div className="px-[2.5vw] 2xl:my-[3vw] h-screen space-y-2 ">
      <div className="flex items-center  gap-[2vw] ">
        <MdArrowBackIosNew
          className="text-xl lg:text-2xl cursor-pointer"
          onClick={handleBackArrowClick}
        />
        <h2 className="text-xl lg:text-2xl font-bold ">Close Friends</h2>
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="p-[0.8vw] rounded-lg w-9/12 bg-black text-white focus:outline-none"
      />
      <CloseRestrictMutedTemp />
    </div>
  );
}

export default CloseFriends;
