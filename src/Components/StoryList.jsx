import { FaPlus } from "react-icons/fa";
import img from "/images/img.jpg";
import img1 from "/images/img1.jpg";
import img2 from "/images/img2.jpg";
import img3 from "/images/img3.webp";
import img4 from "/images/img4.webp";
import img5 from "/images/img5.jpg";
import img6 from "/images/img6.webp";
import img7 from "/images/img7.jpg";
import img8 from "/images/img8.jpg";
import img9 from "/images/img9.jpg";
import img10 from "/images/img10.jpg";

const StoryList = () => {
  const stories = [
    { id: 1, img: img1, alt: "User 1" },
    { id: 2, img: img2, alt: "User 2" },
    { id: 3, img: img3, alt: "User 3" },
    { id: 4, img: img4, alt: "User 4" },
    { id: 5, img: img5, alt: "User 5" },
    { id: 6, img: img6, alt: "User 6" },
    { id: 7, img: img7, alt: "User 7" },
    { id: 8, img: img8, alt: "User 8" },
    { id: 9, img: img9, alt: "User 9" },
    { id: 10, img: img10, alt: "User 10" },
  ];

  return (
    <div className="flex space-x-4 overflow-x-scroll scrollbar-hide ">
      {/* Add Your Story */}
      <div className="flex-shrink-0 text-center">
        <div className="relative  w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center">
        <img
            src={img}
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover opacity-90 "
          />
          <FaPlus className="text-white text-2xl absolute" />
        </div>
        <p className="text-sm mt-2">Add Story</p>
      </div>
      {/* User Stories */}
      {stories.map((story) => (
        <div key={story.id} className="flex-shrink-0 text-center">
          <img
            src={story.img}
            alt={story.alt}
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover"
          />
          <p className="text-sm  mt-2">{story.alt}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryList;
