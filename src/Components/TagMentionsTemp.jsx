import { AiOutlineClose } from "react-icons/ai";
import { DetailsData } from "../Utility/DetailsData";
import { useNavigate } from "react-router-dom";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

function TagMentionsTemp() {
  const comp3Data = DetailsData.find((item) => item.id === "comp3");
  const navigate = useNavigate();
  const handleCloseClick = () => {
    navigate("/settings");
  };
  return (
    <div>
      {comp3Data ? (
        <div key={comp3Data.id} className="mt-[1vw] space-y-2 mb-[3vw] ">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{comp3Data.heading}</h1>
            <AiOutlineClose className="text-2xl" onClick={handleCloseClick} />
          </div>
          <section className="">
            {comp3Data.details.map((detail, detailIndex) => (
              <div
                key={detailIndex}
                className={`flex justify-between items-center p-[1vw] `}
              >
                <div className="w-full">
                  <h1 className="text-xl font-bold">{detail.title}</h1>
                  <p>{detail.info}</p>

                  {detail.subDetails && (
                    <section className="mt-2 bg-[#DFE7FD] text-black rounded-lg">
                      {detail.subDetails.map((subDetail, subDetailIndex) => (
                        <div
                          key={subDetailIndex}
                          className={`flex justify-between  items-center p-[1vw]  ${
                            subDetailIndex === detail.subDetails.length - 1
                              ? "border-none"
                              : "border-b border-black"
                          }`}
                        >
                          <div>
                            <h1>{subDetail.title}</h1>
                          </div>
                          <RiCheckboxBlankCircleLine className="text-2xl" />
                        </div>
                      ))}
                    </section>
                  )}
                </div>
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

export default TagMentionsTemp;
