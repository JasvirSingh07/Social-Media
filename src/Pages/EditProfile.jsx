import { useState } from "react";
import img from "/images/img.jpg";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

function EditProfile() {
  const [gender, setGender] = useState("prefer-not-to-say");
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const navigate = useNavigate();
  const handleBackArrowClick = () => {
    navigate("/settings"); 
  };
  return (
    <div className="px-[2.5vw] space-y-[1.5vw] h-screen py-[2vw] w-full lg:w-8/12 mx-auto ">
      <div className="flex items-center gap-[2vw]">
      <MdArrowBackIosNew  className="text-xl lg:text-2xl" onClick={handleBackArrowClick} />
        <label className="text-xl lg:text-2xl font-bold">Edit Profile</label>
      </div>
      <section className=" flex bg-gray-100 items-center rounded-lg justify-between p-[1vw] lg:p-[1.5vw] ">
        <div className="flex items-center gap-2 text-black">
          <img
            src={img}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover border-2"
          />
          <h1 className="text-base lg:text-lg">_jass_bhatoa_</h1>
        </div>
        <button className="bg-blue-700 text-white px-4 h-8  lg:h-auto lg:py-2 text-xs lg:text-base rounded-md hover:bg-blue-500 transition duration-200">
          change photo
        </button>
      </section>
      <section className="space-y-[1.5vw]">
        <label className="text-xs lg:text-base">Name</label>
        <div>
          <input
            type="text"
            className="bg-gray-100 w-full  p-[1.5vw] rounded-lg text-black placeholder:text-gray-400 placeholder:text-xs placeholder:lg:text-base"
            placeholder="Ex - Jasvir singh"
          />
        </div>
      </section>
      <section className="space-y-[1.5vw]">
        <label className="text-xs lg:text-base">User Name</label>
        <div>
          <input
            type="text"
            className="bg-gray-100 w-full  p-[1.5vw] rounded-lg text-black placeholder:text-gray-400 placeholder:text-xs placeholder:lg:text-base"
            placeholder="Ex - jxss-bhatoa"
          />
        </div>
      </section>

      <section className="space-y-[1.5vw]">
        <label className="text-xs lg:text-base">Website</label>
        <div>
          <input
            type="text"
            className="bg-gray-100 text-black w-full  p-[1.5vw] rounded-lg placeholder:text-gray-400 placeholder:text-xs placeholder:lg:text-base"
            placeholder="Ex - https://linkedin/jxs07"
          />
        </div>
      </section>
      <section className="space-y-[1.5vw]">
        <label className="text-xs lg:text-base">Bio</label>
        <div>
          <textarea
            type="text"
            className=" bg-gray-100 w-full text-black p-[1.5vw] rounded-lg placeholder:text-gray-400 placeholder:text-xs placeholder:lg:text-base"
            placeholder="bio"
          />
        </div>
      </section>

      <section className="space-y-[1.5vw] flex flex-col ">
        <label className="text-xs lg:text-base">Gender</label>
        <select
          id="gender"
          value={gender}
          onChange={handleGenderChange}
          className="w-full p-[1.5vw] text-black rounded-lg bg-gray-100 text-xs lg:text-base "
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </section>
      <div className="flex justify-end">
        <button className="bg-blue-700 text-white px-4 h-8 lg:h-auto lg:py-2 text-xs lg:text-base lg:w-[10vw] rounded-md hover:bg-blue-500 transition duration-200 ">
          submit
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
