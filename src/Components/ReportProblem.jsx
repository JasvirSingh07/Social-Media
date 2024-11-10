export const ReportProblem = () => {
    return (
      <>
        <div className="border-2 rounded-lg flex flex-col p-5 space-y-5 mx-auto w-1/2 mt-10" >
          <div className="flex justify-center">
            <h1>Report a problem</h1>
          </div>
          <textarea
              type="text"
              className=" bg-gray-800 w-full  p-[1.5vw] rounded-lg text-white"
              placeholder="write your problem"
            />
          <div className="flex justify-between">
            <button className="border bg-blue-700 p-2 rounded-lg text-white">
              send report
            </button>
            <button className="border bg-gray-700 text-white p-2 rounded-lg">
              add file
            </button>
          </div>
        </div>
      </>
    );
  };
  