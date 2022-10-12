const PlaceholderCard: React.FC = () => {
  return (
    <div
      className="animate-pulse flex flex-col justify-between rounded bg-white "
      style={{
        boxShadow:
          "0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px 0 rgba(0,0,0,0.12), 0px 1px 4px 0 rgba(0,0,0,0.2)",
      }}
    >
      <div>
        <div className="flex flex-col justify-start items-start  gap-2 p-4 bg-white">
          <p className=" w-[262px] text-[26px] gap-2 flex flex-col">
            <div className="bg-gray-200 rounded-md w-full h-7 "></div>
            <div className="bg-gray-200 rounded-md w-3/4 h-7 "></div>
            <div className="bg-gray-200 rounded-md w-1/4 h-4 mt-3"></div>
          </p>
          <p className=" w-[262px] text-lg text-left text-black/60">
            <div className="bg-gray-200 rounded-md"></div>
          </p>
        </div>
        <div className="h-48">
          <div className="rounded-md w-full h-48   bg-indigo-200"></div>
          <div className="w-full h-48 " />
        </div>
        <div className="flex flex-col justify-start items-start p-4 ">
          <div className="flex flex-col justify-start items-start gap-2">
            {[1,2,3,4,5].map(el => (
                <div key={el} className="flex items-center  p-2 w-full">
                <div className="rounded-full h-5 w-5 bg-red-200"></div>
                <div className=" flex-1 ml-4 w-52">
                  <div className="bg-gray-200 p-1 rounded-md mb-2 w-full"></div>
                  <div className="bg-gray-200 p-1 rounded-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end items-start w-[294px] relative gap-2 p-4 bg-white">
        <div className="rounded-md w-10 h-7 bg-green-200"></div>
      </div>
    </div>
  );
};

export default PlaceholderCard;
