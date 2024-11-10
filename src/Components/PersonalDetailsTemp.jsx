import { useNavigate } from "react-router-dom";
import { DetailsData } from "../Utility/DetailsData"; 
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function PersonalDetailsTemp() {
  const comp1Data = DetailsData.find((item) => item.id === "comp1");
  const navigate = useNavigate();
  const handleBackArrowClick = () => {
    navigate('/settings');
  };
  return (
    <div>
      {comp1Data ? (
        <div key={comp1Data.id} className="space-y-2 mb-[3vw]">
          <div className="flex items-center gap-[2vw]">
            <MdArrowBackIosNew className="text-2xl" onClick={handleBackArrowClick}/>
            <h1 className="text-2xl font-bold">{comp1Data.heading}</h1>
          </div>
          <p>{comp1Data.description}</p>

          <section className="bg-[#DFE7FD] text-black rounded-lg">
            {comp1Data.details.map((detail, detailIndex) => (
              <div
                key={detailIndex}
                className={`flex justify-between items-center p-[1vw] ${
                  detailIndex === comp1Data.details.length - 1
                    ? "border-none"
                    : "border-b border-black"
                }`}
              >
                <div>
                  <h1>{detail.title}</h1>
                  <p>{detail.info}</p>
                </div>
                <MdArrowForwardIos />
              </div>
            ))}
          </section>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PersonalDetailsTemp;
