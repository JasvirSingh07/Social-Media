import { MdArrowBackIosNew } from "react-icons/md"
import CloseRestrictMutedTemp from "../Components/CloseRestrictMutedTemp"
import { useNavigate } from "react-router-dom";

function MutedAccounts() {
    const navigate = useNavigate();
    const handleBackArrowClick = () => {
      navigate("/settings");
    };
  return (
    <div className="space-y-4 my-[3vw] w-9/12 text-white h-screen px-[2.5vw]">
      <div className="flex items-center  gap-[2vw] ">        
        <MdArrowBackIosNew
          className="text-2xl  cursor-pointer"
          onClick={handleBackArrowClick}
        />
        <h2 className="text-2xl font-bold ">Muted Accounts</h2>
      </div>
     <CloseRestrictMutedTemp/>
    </div>
  )
}

export default MutedAccounts
