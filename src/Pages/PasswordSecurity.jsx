import PersonalTagTemp from "../Components/PrivateTagTemp";
import { DetailsData } from "../Utility/DetailsData";

function PasswordSecurity() {
  return (
    <div className="text-white 2xl:my-[3vw] px-[2.5vw] h-screen">
      <PersonalTagTemp data={DetailsData.passwordSecurity} />
    </div>
  );
}

export default PasswordSecurity;
