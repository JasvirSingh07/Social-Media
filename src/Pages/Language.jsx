import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { LanguageData } from "../Utility/LanguageData";

function Language() {
  const navigate = useNavigate();

  const handleBackArrowClick = () => {
    navigate("/settings");
  };

  return (
    <div className="text-white px-[2.5vw] 2xl:my-[3vw]  space-y-5 ">
      <div className="flex items-center gap-[2vw] ">
        <MdArrowBackIosNew
          className="text-2xl  cursor-pointer"
          onClick={handleBackArrowClick}
        />
        <h2 className="text-xl 2xl:text-2xl font-bold ">Search languages</h2>
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="p-[0.8vw] rounded-lg w-8/12 sm:w-6/12  bg-[#DFE7FD] text-black focus:outline-none"
      />
      <div className="flex flex-col space-y-[1vw]"> 
        {LanguageData.map((lang, index) => {
          return (
            <div key={index} className="flex gap-[0.5vw] items-center">
              <img src={lang.flag} className="w-10 h-10" />
              <span className="text-xl">{lang.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Language;
