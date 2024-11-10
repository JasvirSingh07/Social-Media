import { MdArrowBackIosNew } from "react-icons/md"
import { UsersData } from "../Utility/UsersData"
import { useNavigate } from "react-router-dom";

function RestrictedAccounts() {
    const navigate = useNavigate();
    const handleBackArrowClick = () => {
      navigate("/settings");
    };
  return (
    <div className="space-y-4 my-[2vw] w-9/12 text-white h-screen px-[2.5vw]">
      <div className="flex items-center  gap-[2vw] ">
        <MdArrowBackIosNew
          className="text-2xl  cursor-pointer"
          onClick={handleBackArrowClick}
        />
        <h2 className="text-2xl font-bold ">Restricted Accounts</h2>
      </div>
      {UsersData.map((user, index) => (
        <div key={index} className="flex items-center justify-between ">
          <div className=" flex items-center flex-shrink-0 text-center gap-[1vw]">
            <img
              src={user.dp}
              alt="img"
              className="w-10 h-10 rounded-full object-cover border-2 "
            />
            <h1 className="text-white">{user.username}</h1>
          </div>
          <button className="border p-[0.3vw] rounded-lg">{user.restrict}</button>
        </div>
      ))}
    </div>
  )
}

export default RestrictedAccounts
