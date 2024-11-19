import { FaEdit } from "react-icons/fa";
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
    message: "you sent an attachment.",
    time: "3d",
    img: "https://placehold.co/50x50",
  },
  {
    name: "Jagdeep Tarkhanwala",
    message: "you sent an attachment.",
    time: "3d",
    img: "https://placehold.co/50x50",
  },
  {
    name: "RAM",
    message: "you sent an attachment.",
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
    message: "you sent an attachment.",
    time: "2w",
    img: "https://placehold.co/50x50",
  },
];

const Messages = () => {
  return (
    <div className=" h-screen overflow-y-scroll scrollbar-hide my-[2vw] ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 mx-[2.5vw] ">
        <span className="text-2xl lg:text-3xl font-bold flex items-center gap-2  ">
          <span>
            <IoIosArrowDropdown className="" />
          </span>
          jass_bhatoa_
        </span>
        <div className="flex space-x-2">
          {/* <FaStickyNote className="text-white text-xl" /> */}
          <FaEdit className="text-2xl lg:text-3xl" />
        </div>
      </div>

      {/* Stories (Profiles on top) */}
      <div className="px-[2.5vw]">
        <StoryList />
      </div>

      {/* Messages Heading */}
      <div className="flex justify-between mb-2 px-[2.5vw] font-bold">
        <span>Messages</span>
        <span>Requests</span>
      </div>

      {/* Chat List */}
      <div className="space-y-4 px-[2.5vw]">
        {chatData.map((chat, index) => (
          <div key={index} className="flex items-center space-x-4 border-b py-2">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
