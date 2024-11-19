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
import img11 from "/images/virat.webp";


const Explore = () => {
  const images = [
    { src: img1, alt: "" },
    { src: img2, alt: "" },
    { src: img3, alt: "" },
    { src: img4, alt: "" },
    { src: img5, alt: "" },
    { src: img6, alt: "" },
    { src: img7, alt: "" },
    { src: img8, alt: "" },
    { src: img9, alt: "" },
    { src: img10, alt: "" },
    { src: img11, alt: "" },
    { src: img, alt: "" },
  ];

  return (
    <div className="p-2 sm:w-8/12 ">
      {/* Search Bar */}
      {/* <div className="w-full mb-3 py-[2.5vw]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 text-white bg-black  rounded-md"
        />
      </div> */}

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3  gap-1  overflow-y-auto scrollbar-hide">
        {images.map((image, index) => (
          <div key={index} className="">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
