import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import CloseRestrictMutedTemp from "../Components/CloseRestrictMutedTemp";

function Blocked() {
  const navigate = useNavigate();
  const handleBackArrowClick = () => {
    navigate("/settings");
  };

  return (
    <div className="text-white px-[2.5vw] 2xl:my-[3vw] h-screen space-y-2">
      <div className="flex items-center  gap-[2vw] ">
        <MdArrowBackIosNew
          className="lg:text-2xl text-xl cursor-pointer"
          onClick={handleBackArrowClick}
        />
        <h2 className="text-xl lg:text-2xl font-bold ">Blocked Accounts</h2>
      </div>
      <CloseRestrictMutedTemp />
    </div>
  );
}

export default Blocked;
