import PrivacyCommentTemp from "../Components/PrivacyCommentTemp";
import { PrivacyCommentData } from "../data/PrivacyCommentData";

function AccountPrivacy() {
  return(
    <>
    <PrivacyCommentTemp data={PrivacyCommentData.Privacy}/>
    </>
  );
}

export default AccountPrivacy;
