import { useState, useEffect } from "react";
// import img from "/images/jass.png";
import { FaMusic, FaUser } from "react-icons/fa";
import { ImImages } from "react-icons/im";
import { IoCreateOutline } from "react-icons/io5";

const Create = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSrc =
    windowWidth < 640 ? (
      <ImImages className="text-5xl" />
    ) : (
      <ImImages className="text-5xl" />
    );

  return (
    <div className="py-[2vw] w-full sm:w-8/12 mx-auto px-[2.5vw] pb-20 h-screen">
      <div className="flex space-x-[1vw] items-center ">
        <IoCreateOutline className="text-[5vw] sm:text-[2.5vw] " />
        <p className="text-xl sm:text-lg lg:text-2xl xl:text-4xl tracking-wide font-extrabold">
          Create Post
        </p>
      </div>
      <div className="mt-4 rounded-lg shadow-md border ">
        {/* <div className="flex space-x-2 my-2 ml-10 sm:ml-20 items-center">
          <img
            src={img}
            alt="Dp"
            className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover border-2 "
          />
          <h1 className="text-[4vw] sm:text-sm md:text-lg lg:text-[1.3vw]  px-5 lg:py-2.5 rounded-md">
            _jass_bhatoa_
          </h1>
        </div> */}
        <div className="flex w-10/12 my-[4vw] mx-auto mb-4">
          {selectedFile ? (
            <img
              src={selectedFile}
              alt="Selected"
              className="max-w-full max-h-64 object-cover rounded-md"
            />
          ) : (
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-64 2xl:h-[370px] border rounded-md cursor-pointer "
            >
              {imageSrc}
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          )}
        </div>
        <form>
          <div className="w-10/12 mx-auto">
            <textarea
              id="caption"
              rows="2"
              className="w-full px-3 py-2 border  rounded-md  placeholder:text-sm lg:placeholder:text-lg"
              placeholder="Add Caption"
            ></textarea>
          </div>
        </form>

        <div className="flex space-x-[5vw] w-10/12 mx-auto">
          <div className="flex items-center gap-2">
            <FaUser className="text-xl lg:text-3xl" />
            <h1 className="text-sm lg:text-base xl:text-2xl">Tag people</h1>
          </div>
          <div className="flex items-center gap-2">
            <FaMusic className="text-xl lg:text-3xl" />
            <h1 className="text-sm lg:text-base xl:text-2xl">Add Music</h1>
          </div>
        </div>
        <div className="flex w-11/12 justify-end mt-7 sm:mt-2 mb-3">
          <button
            type="submit"
            className="w-14 lg:w-24 xl:w-32 xl:text-2xl bg-blue-700 hover:bg-blue-500 text-white lg:py-1 rounded-md"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
