import PersonalTagTemp from "../Components/PrivateTagTemp";
import { DetailsData } from "../Utility/DetailsData";

function PasswordSecurity() {
  return (
    <div className="py-[2vw] px-[2.5vw] h-screen">
      <PersonalTagTemp data={DetailsData.passwordSecurity} />
    </div>
  );
}

export default PasswordSecurity;
