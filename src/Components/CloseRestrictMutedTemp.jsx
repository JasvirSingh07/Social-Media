import { RiCheckboxCircleFill } from "react-icons/ri"
import { UsersData } from "../Utility/UsersData"

function CloseRestrictMutedTemp() {
  return (
    <div className="space-y-4 pt-[1vw] w-9/12">
    {UsersData.map((user, index) => (
      <div key={index} className="flex items-center justify-between">
        <div className=" flex items-center flex-shrink-0 text-center gap-[2vw] lg:gap-[1vw]">
          <img
            src={user.dp}
            alt="img"
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover border-2 "
          />
          <h1 className="text-white">{user.username}</h1>
        </div>
        <RiCheckboxCircleFill className="text-2xl lg:text-3xl" />
      </div>
    ))}
  </div>
  )
}

export default CloseRestrictMutedTemp
