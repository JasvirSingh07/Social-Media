import { FaPlus } from "react-icons/fa";
import img from "/images/jassa.jpg";
import img1 from "/images/img1.webp";
import img2 from "/images/img2.jpg";
import img3 from "/images/img3.jpg";
import img4 from "/images/img4.webp";
import img5 from "/images/img5.webp";

const StoryList = () => {
  const stories = [
    { id: 1, img: img, alt: "User 1" },
    { id: 2, img: img1, alt: "User 2" },
    { id: 3, img: img4, alt: "User 3" },
    { id: 4, img: img3, alt: "User 4" },
    { id: 5, img: img5, alt: "User 5" },
    { id: 6, img: img2, alt: "User 6" },
    { id: 7, img: img, alt: "User 7" },
    { id: 8, img: img1, alt: "User 8" },
    { id: 9, img: img4, alt: "User 9" },
    { id: 10, img: img2, alt: "User 10" },
  ];

  return (
    <div className="flex space-x-4 m-8 overflow-x-scroll  scrollbar-hide ">
      {/* Add Your Story */}
      <div className="flex-shrink-0 text-center">
        <div className="relative w-24 h-24 rounded-full bg-[#DFE7FD] border-2  flex items-center justify-center">
          <FaPlus className="text-white text-2xl" />
        </div>
        <p className="text-sm text-gray-300 mt-2">Add Your Story</p>
      </div>
      {/* User Stories */}
      {stories.map((story) => (
        <div key={story.id} className="flex-shrink-0 text-center">
          <img
            src={story.img}
            alt={story.alt}
            className="w-24 h-24 rounded-full object-cover border-2 "
          />
          <p className="text-sm text-gray-300 mt-2">{story.alt}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryList;
