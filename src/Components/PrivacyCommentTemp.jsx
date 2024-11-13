import { BsToggle2Off } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function PrivacyCommentTemp({data}) {
  const navigate = useNavigate();
  const handleBackArrowClick = () => {
    navigate("/settings");
  };
  return (
    <div className="text-white px-[2.5vw] 2xl:my-[3vw] space-y-2 h-screen">
      <div className="flex items-center gap-[2vw]">
        <MdArrowBackIosNew
          className="text-2xl"
          onClick={handleBackArrowClick}
        />
        <h1 className="text-2xl font-bold">{data.title}</h1>
      </div>
      <div className="flex justify-between items-center bg-[#DFE7FD] text-black rounded-lg p-[1vw]">
        <div className="w-9/12">
          <h2 className="text-xl">{data.subtitle}</h2>
          <p className="text-slate-600">
           {data.description}
          </p>
        </div>
        <BsToggle2Off className="text-5xl" />
      </div>
    </div>
  );
}

export default PrivacyCommentTemp;
