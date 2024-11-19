import { MdArrowBackIosNew } from "react-icons/md"
import CloseRestrictMutedTemp from "../Components/CloseRestrictMutedTemp"
import { useNavigate } from "react-router-dom";

function MutedAccounts() {
    const navigate = useNavigate();
    const handleBackArrowClick = () => {
      navigate("/settings");
    };
  return (
    <div className="space-y-4 my-[2vw] w-9/12 h-screen px-[2.5vw]">
      <div className="flex items-center  gap-[2vw] ">        
        <MdArrowBackIosNew
          className="lg:text-2xl text-xl cursor-pointer"
          onClick={handleBackArrowClick}
        />
        <h2 className="lg:text-2xl text-xl font-bold ">Muted Accounts</h2>
      </div>
     <CloseRestrictMutedTemp/>
    </div>
  )
}

export default MutedAccounts
