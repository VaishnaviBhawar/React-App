import React from "react";

function Headersec() {
  return (
    <div className="h-[60px] w-full flex items-center">
      <div className="h-[30px] w-[30px] rounded-full bg-red-500 m-2"></div>
      <div className="h-[30px] w-[30px] rounded-full bg-green-500 ml-4"></div>
      <div className="flex-1 text-center">
        <span className="italic text-blue-500 font-bold text-[20px] md:text-[25px]">
          2024
        </span>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://www.shrirampur.com"
          className="italic font-medium text-[12px] sm:text-[15px] text-white bg-purple-500 rounded-lg px-3 py-1 hover:bg-purple-600 focus:bg-purple-700"
        >
          Explore
        </a>
        <a
          href="https://www.google.com/maps/place/Shrirampur,+Maharashtra"
          className="italic font-bold text-[14px] sm:text-[18px] text-blue-500 hover:underline focus:underline"
        >
          Shrirampur
        </a>
      </div>
    </div>
  );
}

export default Headersec;
