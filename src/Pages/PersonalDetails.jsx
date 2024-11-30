import PersonalDetailsTemp from "../Components/PersonalDetailsTemp";
import { DetailsData } from "../Utility/DetailsData";

function PersonalDetails() {
  return (
    <div className="py-[2vw] h-screen px-[2.5vw]">
      <PersonalDetailsTemp data={DetailsData.personalDetails} />
    </div>
  );
}

export default PersonalDetails;
