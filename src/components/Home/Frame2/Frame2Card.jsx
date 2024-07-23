import { FaArrowUpLong, FaRegClock } from "react-icons/fa6";

const Card = ({ chartType, BackgroundColor, BoldNumber, Percentage, ArrowColor, Description, Timing }) => {
  return (
    <div className="w-full relative bg-white rounded-3xl shadow-lg flex flex-col justify-between p-6 transition transform hover:scale-105 mb-6 md:mb-0 lg:mb-0">
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] p-4 rounded-3xl shadow-lg "
        style={{ backgroundColor: `${BackgroundColor}`, marginTop: "2rem" }}
      >
        <img src={chartType} alt="react-chart" className="w-full h-auto animate-shake" />
      </div>
      <div className="pt-28 md:pt-24 lg:pt-24 xl:pt-28 2xl:pt-32 flex flex-col justify-between h-full">
        <div>
          <h1 className="font-bold text-black text-2xl whitespace-nowrap">{Description==="Transfer Amount of Core Tokens"?"$ ":""}{BoldNumber}</h1>
          <h1 className="py-2 text-gray-700 ">{Description}</h1>
          {/* <div className="flex items-center text-green-500">
            <FaArrowUpLong color={ArrowColor} />
            <p className="ml-2">{Percentage}% increase <span className="text-gray-500">in today</span></p>
          </div> */}
        </div>
        {/* <div className="border-t mt-4 pt-2 text-gray-600 text-sm">
          <div className="flex items-center">
            <FaRegClock />
            <p className="ml-2">{Timing} sec ago</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
