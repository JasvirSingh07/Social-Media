
import PrivateTagTemp from "../Components/PrivateTagTemp"
import { DetailsData } from "../Utility/DetailsData"

function TagMentions() {
  return (
    <div className="px-[2.5vw] py-[2vw] h-screen">
      <PrivateTagTemp data={DetailsData.tagsMentions}/>
    </div>
  )
}

export default TagMentions
