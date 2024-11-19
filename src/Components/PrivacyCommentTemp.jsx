import { BsToggle2Off } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function PrivacyCommentTemp({ data }) {
  const navigate = useNavigate();
  const handleBackArrowClick = () => {
    navigate("/settings");
  };
  return (
    <div className="px-[2.5vw] 2xl:my-[2vw] space-y-2 h-screen">
      <div className="flex items-center gap-[2vw]">
        <MdArrowBackIosNew
          className="text-xl lg:text-2xl"
          onClick={handleBackArrowClick}
        />
        <h1 className="text-xl lg:text-2xl font-bold">{data.title}</h1>
      </div>
      <div className=" bg-gray-100 text-black rounded-lg p-[1vw]">
        <div className=" flex justify-between items-center">
          <h2 className="text-base lg:text-xl">{data.subtitle}</h2>
          <BsToggle2Off className="text-3xl lg:text-5xl" />
        </div>
        <p className="text-slate-600 text-xs lg:text-base">
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default PrivacyCommentTemp;
