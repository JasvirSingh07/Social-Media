
import PrivateTagTemp from "../Components/PrivateTagTemp"
import { DetailsData } from "../Utility/DetailsData"

function TagMentions() {
  return (
    <div className="text-white px-[2.5vw] 2xl:my-[2vw] h-screen">
      <PrivateTagTemp data={DetailsData.tagsMentions}/>
    </div>
  )
}

export default TagMentions
