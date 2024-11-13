import PrivacyCommentTemp from "../Components/PrivacyCommentTemp";
import { PrivacyCommentData } from "../Utility/PrivacyCommentData";

function AccountPrivacy() {
  return(
    <>
    <PrivacyCommentTemp data={PrivacyCommentData.Privacy}/>
    </>
  );
}

export default AccountPrivacy;
