import { useState } from "react";
import downArrow from "/images/downArrow.svg";
import { FaqData } from "../Utility/FaqData";
import call from "/videos/Call Center.gif";

function Help() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleArrowClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-[2vw] px-[2.5vw]  py-[2vw] text-white ">
      <div className=" bg-[#DFE7FD] rounded-xl text-black flex flex-col sm:flex-row items-center pb-5 sm:pb-0 md:space-x-[3vw] sm:space-x-5 w-[95%] mx-auto sm:rounded-3xl sm:px-[3vw]">
        <div className="sm:ml-10 lg:ml-[2vw] mt-4 sm:mt-8 mx-auto sm:mx-0 w-[80%] sm:w-[40%] lg:w-[35%] xl:w-[25%] ">
          <img
            src={call}
            className="object-contain rounded-3xl "
            alt="Call Center"
          />
        </div>
        <div className="flex flex-col w-[90%] sm:w-[50%] lg:w-[70%] xl:w-[60%] mt-4 mx-auto ">
          <h1 className="text-xl sm:text-lg md:text-2xl xl:text-4xl font-bold text-center sm:text-left">
            How can we help you ?
          </h1>
          <div className="mt-4 xl:mt-8  xl:w-[65%]">
            <div className="flex items-center py-3 rounded-full sm:rounded-lg shadow-lg bg-black text-white overflow-hidden ">
              <div className="grid place-items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="outline-none text-base bg-black pl-2"
                type="text"
                id="search"
                placeholder="Search Your Key Words"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[95%] pb-6 mx-auto rounded-xl">
        <h1 className="text-xl sm:text-3xl mx-auto tracking-wide font-bold mt-2">
          Featured Topics
        </h1>
        <div className="mt-4 md:mt-4 border rounded-2xl w-[90%]  mx-auto py-5">
          <div className="max-h-[500px] overflow-y-auto">
            {FaqData.map((item, index) => (
              <div
                key={index}
                className="relative mx-auto mb-4 w-[95%] sm:w-[90%]"
              >
                <div
                  className="flex items-center h-10  border  px-5 sm:px-14 md:px-2 border-black rounded-2xl w-full cursor-pointer sm:h-14"
                  onClick={() => handleArrowClick(index)}
                >
                  <h1 className="text-xs sm:text-sm md:text-lg 2xl:text-xl flex-grow md:p-2">
                    {item.question}
                  </h1>
                  <img
                    src={downArrow}
                    alt="Arrow Icon"
                    className={`transition-transform duration-300 w-6 h-4  ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expandedIndex === index && (
                  <div className="mt-2 px-5 sm:px-10 py-2 shadow-lg text-xs sm:text-sm md:text-lg 2xl:text-xl bg-gray-400 rounded-lg">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
