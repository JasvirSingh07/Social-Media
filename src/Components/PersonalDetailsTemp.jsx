import { useNavigate } from "react-router-dom";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function PersonalDetailsTemp({data}) {
  const navigate = useNavigate();
  const handleBackArrowClick = () => {
    navigate('/settings');
  };
  return (
    <div>
      {data ? (
        <div key={data.id} className="space-y-2 mb-[3vw]">
          <div className="flex items-center gap-[2vw]">
            <MdArrowBackIosNew className="text-xl lg:text-2xl" onClick={handleBackArrowClick}/>
            <h1 className="text-xl lg:text-2xl font-bold">{data.heading}</h1>
          </div>
          <p className="text-xs lg:text-base">{data.description}</p>

          <section className="bg-[#DFE7FD] text-black rounded-lg">
            {data.details.map((detail, detailIndex) => (
              <div
                key={detailIndex}
                className={`flex justify-between items-center p-[1vw] ${
                  detailIndex === data.details.length - 1
                    ? "border-none"
                    : "border-b border-black"
                }`}
              >
                <div>
                  <h1 className="text-xs lg:text-lg">{detail.title}</h1>
                  <p className="text-xs lg:text-base">{detail.info}</p>
                </div>
                <MdArrowForwardIos />
              </div>
            ))}
          </section>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PersonalDetailsTemp;
