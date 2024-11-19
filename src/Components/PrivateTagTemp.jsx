import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function PrivateTagTemp({data}) {
    const navigate = useNavigate();
    const handleCloseClick = () => {
      navigate("/settings");
    };
  return (
        <div key={data.id} className="space-y-2 mb-[3vw] ">
          <div className="flex justify-between items-center">
            <h1 className="text-lg lg:text-2xl font-bold">{data.heading}</h1>
            <AiOutlineClose className="text-lg lg:text-2xl" onClick={handleCloseClick} />
          </div>
          <section className="">
            {data.details.map((detail, detailIndex) => (
              <div
                key={detailIndex}
                className={`flex justify-between items-center p-[1vw] `}
              >
                <div className="w-full">
                  <h1 className="text-sm lg:text-xl font-bold">{detail.title}</h1>
                  <p className="text-xs lg:text-base">{detail.info}</p>

                  {detail.subDetails && (
                    <section className="mt-2 bg-gray-100 shadow-sm text-black rounded-lg">
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
                            <h1 className="text-xs lg:text-base ">{subDetail.title}</h1>
                          </div>
                         {subDetail.icon}
                        </div>
                      ))}
                    </section>
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>
  )
}

export default PrivateTagTemp
