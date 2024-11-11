import { useState } from "react";
import img from "/images/jass.png";
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
    <div className="text-white px-[2.5vw] space-y-[1.5vw] h-screen 2xl:my-[2vw]  ">
      <div className="flex items-center gap-[2vw]">
      <MdArrowBackIosNew  className="text-2xl" onClick={handleBackArrowClick} />
        <label className="text-2xl font-bold">Edit Profile</label>
      </div>
      <section className=" flex bg-[#DFE7FD]  rounded-lg justify-between p-[1.5vw]  my-14">
        <div className="flex items-center gap-2 text-black">
          <img
            src={img}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover border-2"
          />
          <h1>_jass_bhatoa_</h1>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-200">
          change photo
        </button>
      </section>
      <section className="space-y-[1.5vw]">
        <label>User Name</label>
        <div>
          <input
            type="text"
            className="bg-[#DFE7FD] w-full  p-[1.5vw] rounded-lg text-black placeholder:text-gray-400"
            placeholder="Ex - jxss-bhatoa"
          />
        </div>
      </section>

      <section className="space-y-[1.5vw]">
        <label>website</label>
        <div>
          <input
            type="text"
            className="bg-[#DFE7FD] text-black w-full  p-[1.5vw] rounded-lg placeholder:text-gray-400"
            placeholder="Ex - https://linkedin/jxs07"
          />
        </div>
      </section>
      <section className="space-y-[1.5vw]">
        <label>Bio</label>
        <div>
          <textarea
            type="text"
            className=" bg-[#DFE7FD] w-full text-black p-[1.5vw] rounded-lg placeholder:text-gray-400 "
            placeholder="bio"
          />
        </div>
      </section>

      <section className="space-y-[1.5vw] flex flex-col ">
        <label>Gender</label>
        <select
          id="gender"
          value={gender}
          onChange={handleGenderChange}
          className="w-full p-[1.5vw] text-black rounded-lg bg-[#DFE7FD] "
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </section>
      <div className="flex justify-end">
        <button className="bg-blue-700 text-white px-4 py-2 w-[10vw] rounded-md hover:bg-blue-500 transition duration-200 ">
          submit
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
