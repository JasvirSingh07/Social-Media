import img from "/images/jassa.jpg";
import img1 from "/images/img1.webp";
import img2 from "/images/img2.jpg";
import img3 from "/images/img3.jpg";
import img4 from "/images/img4.webp";
import img5 from "/images/img5.webp";
import img6 from "/images/img6.webp";

const Explore = () => {
  const images = [
    { src: img, alt: "" },
    { src: img1, alt: "" },
    { src: img2, alt: "" },
    { src: img3, alt: "" },
    { src: img4, alt: "" },
    { src: img5, alt: "" },
    { src: img6, alt: "" },
    { src: img, alt: "" },
    { src: img1, alt: "" },
  ];

  return (
    <div className="grid grid-cols-3 gap-1 p-1">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Explore;
