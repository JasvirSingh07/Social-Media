import { MdArrowForwardIos } from "react-icons/md";
import { DetailsData } from "../Utility/DetailsData"; 
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function PasswordSecurityTemp() {
  const comp2Data = DetailsData.find((item) => item.id === "comp2");
  const navigate = useNavigate();
  const handleCloseClick = () => {
    navigate('/settings');
  };
  return (
    <div>
      {comp2Data ? (
        <div key={comp2Data.id} className=" space-y-2 mb-[3vw] ">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{comp2Data.heading}</h1>
            <AiOutlineClose className="text-2xl" onClick={handleCloseClick}/>
          </div>
          <section className="">
            {comp2Data.details.map((detail, detailIndex) => (
              <div
                key={detailIndex}
                className={`flex justify-between items-center p-[1vw] `}
              >
                <div className="w-full">
                  <h1>{detail.title}</h1>
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
                          <MdArrowForwardIos />
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

export default PasswordSecurityTemp;
