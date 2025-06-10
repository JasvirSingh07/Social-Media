import PrivacyCommentTemp from "../Components/PrivacyCommentTemp"
import { PrivacyCommentData } from "../data/PrivacyCommentData"

function Comments() {
  return (
    <>
      <PrivacyCommentTemp data={PrivacyCommentData.Comment}/>
    </>
  )
}

export default Comments
