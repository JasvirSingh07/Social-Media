import { MdArrowBackIosNew } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import CloseRestrictMutedTemp from "../Components/CloseRestrictMutedTemp";

function RestrictedAccounts() {
    const navigate = useNavigate();
    const handleBackArrowClick = () => {
      navigate("/settings");
    };
  return (
    <div className="space-y-4 my-[3vw] w-9/12 text-white h-screen px-[2.5vw]">
      <div className="flex items-center gap-[2vw] ">        
        <MdArrowBackIosNew
          className="lg:text-2xl text-xl cursor-pointer"
          onClick={handleBackArrowClick}
        />
        <h2 className="lg:text-2xl text-xl font-bold ">Restricted Accounts</h2>
      </div>
     <CloseRestrictMutedTemp/>
    </div>
  )
}

export default RestrictedAccounts
