import { useState } from "react";
import DownArrow from "../../../public/downArrow.svg";
import { usePrice } from "../../hooks/usePrice";
import ClockLoader from "react-spinners/ClockLoader";
import Skeleton from "react-loading-skeleton";

function Prices() {
  const { data, error, isLoading } = usePrice();
  const [arrowClick, setArrowClick] = useState([]);
  const [showAll, setShowAll] = useState(false);

  if (error) return <p className="text-red-500">{error.message}</p>;
  
  const priceData = data?.about || [];
  const visibleData = showAll ? priceData : priceData.slice(0, 6);

  const handleToggle = (index) => {
    if (arrowClick.includes(index)) {
      setArrowClick(arrowClick.filter((i) => i !== index));
    } else {
      setArrowClick([...arrowClick, index]);
    }
  };

  return (
    <div className="px-[5rem] mt-[5rem] pb-[10.5rem]">
      <p
        className="uppercase font-bold text-[1.5rem]"
        style={{
          background: "linear-gradient(180deg, #C4C4C4 0%, #737373 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Prices
      </p>
      
      {isLoading ? (
        Array.from({ length: showAll ? priceData.length : 6 }).map((_, index) => (
          <div key={index} className="w-full mt-7">
            <div className="bg-[#222] rounded-[8.75rem] px-8 py-6 flex items-center justify-between">
              <Skeleton className="w-1/2 h-[2rem]" />
              <Skeleton circle={true} className="w-[5rem] h-[5rem]" />
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0`}>
              <div className="flex flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around md:py-8 lg:py-8 bg-[#333] p-4 pl-8 mt-4 text-white border border-[#D7FD44] rounded-[8.75rem] transition-all duration-500 ease-in-out">
                <Skeleton className="w-full h-[2rem]" />
                <Skeleton className="w-full h-[2rem]" />
                <Skeleton className="w-full h-[2rem]" />
              </div>
            </div>
          </div>
        ))
      ) : (
        visibleData.map((item, index) => (
          <div key={index} className="w-full mt-7">
            <div
              className="bg-[#222] rounded-[8.75rem] px-8 py-6 flex items-center justify-between cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <p className="text-[1.25rem] font-bold text-[#C4C4C4] uppercase">
                {item.name}
              </p>
              <div className="bg-[#D7FD44] rounded-full w-[5rem] h-[5rem] flex items-center justify-center">
                <img
                  src={DownArrow}
                  alt="Expand section"
                  className={`transition-transform duration-300 ${
                    arrowClick.includes(index) ? "rotate-[49deg]" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                arrowClick.includes(index)
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{ transformOrigin: "top" }}
            >
              <div className="flex flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around md:py-8 lg:py-8 bg-[#333] p-4 pl-8 mt-4 text-white border border-[#D7FD44] rounded-[8.75rem] transition-all duration-500 ease-in-out">
                <p className="font-bold md:text-[1.25rem] lg:text-[1.5rem]">
                  <b className="text-[#D7FD44] font-extrabold">X</b> 1 session - $
                  {item.sessions_single}
                </p>
                <p className="font-bold md:text-[1.25rem] lg:text-[1.5rem]">
                  <b className="text-[#D7FD44] font-extrabold">X</b> 5 sessions -
                  ${item.sessions_five}
                </p>
                <p className="font-bold md:text-[1.25rem] lg:text-[1.5rem]">
                  <b className="text-[#D7FD44] font-extrabold">X</b> 10 sessions -
                  ${item.sessions_ten}
                </p>
              </div>
            </div>
          </div>
        ))
      )}

      {priceData.length > 6 && !showAll ? (
        <button
          onClick={() => setShowAll(true)}
          className="mt-6 text-[#D7FD44] font-bold uppercase text-center w-full"
        >
          See More...
        </button>
      ) : (
        <button
          onClick={() => setShowAll(false)}
          className="mt-6 text-[#D7FD44] font-bold uppercase text-center w-full"
        >
          Show Less...
        </button>
      )}
    </div>
  );
}

export default Prices;
