import { RiCheckboxCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { UsersData } from "../Utility/UsersData";

function CloseFriends() {
  const navigate = useNavigate();
  const handleBackArrowClick = () => {
    navigate("/settings");
  };
  return (
    <div className="text-white px-[2.5vw] 2xl:my-[2vw] h-screen space-y-2 ">
      <div className="flex items-center  gap-[2vw] ">
        <MdArrowBackIosNew
          className="text-2xl  cursor-pointer"
          onClick={handleBackArrowClick}
        />
        <h2 className="text-2xl font-bold ">Close Friends</h2>
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="p-[0.8vw] rounded-lg w-9/12  bg-[#DFE7FD] text-black focus:outline-none"
      />
      <div className="space-y-4 pt-[1vw] w-9/12">
        {UsersData.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className=" flex items-center flex-shrink-0 text-center gap-[1vw]">
              <img
                src={user.dp}
                alt="img"
                className="w-10 h-10 rounded-full object-cover border-2 "
              />
              <h1 className="text-white">{user.username}</h1>
            </div>
            <RiCheckboxCircleFill className="text-3xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CloseFriends;
