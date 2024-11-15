import PersonalDetailsTemp from "../Components/PersonalDetailsTemp";
import { DetailsData } from "../Utility/DetailsData";

function PersonalDetails() {
  return (
    <div className="text-white 2xl:my-[3vw]  h-screen px-[2.5vw]">
      <PersonalDetailsTemp data={DetailsData.personalDetails} />
    </div>
  );
}

export default PersonalDetails;
