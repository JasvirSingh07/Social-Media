import { FaEdit, FaCircle } from "react-icons/fa";
import StoryList from "../Components/StoryList";
import { IoIosArrowDropdown } from "react-icons/io";

const chatData = [
  {
    name: "Lovish",
    message: "You sent an attachment.",
    time: "1h",
    img: "https://placehold.co/50x50",
  },
  {
    name: "Vishal",
    message: "You sent an attachment.",
    time: "16h",
    img: "https://placehold.co/50x50",
  },
  {
    name: "ROHIT",
    message: "You sent an attachment.",
    time: "1d",
    img: "https://placehold.co/50x50",
  },
  {
    name: "Gurjot",
    message: "You sent an attachment.",
    time: "1d",
    img: "https://placehold.co/50x50",
  },
  {
    name: "JASHAN",
    message: "JASHAN sent an attachment.",
    time: "3d",
    img: "https://placehold.co/50x50",
  },
  {
    name: "Jagdeep Tarkhanwala",
    message: "Jagdeep sent an attachment.",
    time: "3d",
    img: "https://placehold.co/50x50",
  },
  {
    name: "RAM",
    message: "RAM sent an attachment.",
    time: "1w",
    img: "https://placehold.co/50x50",
  },
  {
    name: "Deep",
    message: "You sent an attachment.",
    time: "1w",
    img: "https://placehold.co/50x50",
  },
  {
    name: "Uday Alwariya",
    message: "You sent an attachment.",
    time: "1w",
    img: "https://placehold.co/50x50",
  },
  {
    name: "Naman",
    message: "Naman sent an attachment.",
    time: "2w",
    img: "https://placehold.co/50x50",
  },
];

const Messages = () => {
  return (
    <div className=" h-screen text-white overflow-y-scroll scrollbar-hide my-[2vw] ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 mx-[2.5vw] ">
        <span className="text-3xl font-bold flex items-center gap-2  ">
          <span>
            <IoIosArrowDropdown className="text-4xl" />
          </span>
          jass_bhatoa_
        </span>
        <div className="flex space-x-2">
          {/* <FaStickyNote className="text-white text-xl" /> */}
          <FaEdit className="text-4xl" />
        </div>
      </div>

      {/* Stories (Profiles on top) */}
      <StoryList />

      {/* Messages Heading */}
      <div className="flex justify-between mb-2 px-[2.5vw]">
        <span className="font-bold">Messages</span>
        <span className="text-gray-500">Requests</span>
      </div>

      {/* Chat List */}
      <div className="space-y-4 px-[2.5vw]">
        {chatData.map((chat, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img
              src={chat.img}
              alt={chat.name}
              className="rounded-full w-12 h-12"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-bold">{chat.name}</span>
                <span className="text-gray-500 text-sm">{chat.time}</span>
              </div>
              <span className="text-gray-400">{chat.message}</span>
            </div>
            <div className="text-blue-500">
              <FaCircle />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
