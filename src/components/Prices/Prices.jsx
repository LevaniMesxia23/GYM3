import { useState } from "react";
import DownArrow from "../../../public/downArrow.svg";
import { usePrice } from "../../hooks/usePrice";

function Prices() {
  const { data, error, isLoading } = usePrice();
  const [arrowClick, setArrowClick] = useState([]);

  if (error) return <p className="text-red-500">{error.message}</p>;
  if (isLoading) return <p className="text-gray-400">Loading...</p>;

  const priceData = data?.about;

  const handleToggle = (index) => {
    if (arrowClick.includes(index)) {
      setArrowClick(arrowClick.filter((i) => i !== index));
    } else {
      setArrowClick([...arrowClick, index]);
    }
  };

  return (
    <div className="px-[5rem]">
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
      {priceData?.map((item, index) => (
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
              arrowClick.includes(index) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
            style={{ transformOrigin: "top" }}
          >
            <div className={`flex flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around md:py-8 lg:py-8 bg-[#333] p-4 pl-8 mt-4 text-white border border-[#D7FD44] rounded-[8.75rem] transition-all duration-500 ease-in-out`}>
              <p className="font-bold md:text-[1.25rem] lg:text-[1.5rem]">
                <b className="text-[#D7FD44] font-extrabold">X</b> 1 session - ${item.sessions_single}
              </p>
              <p className="font-bold md:text-[1.25rem] lg:text-[1.5rem]">
                <b className="text-[#D7FD44] font-extrabold">X</b> 5 sessions - ${item.sessions_five}
              </p>
              <p className="font-bold md:text-[1.25rem] lg:text-[1.5rem]">
                <b className="text-[#D7FD44] font-extrabold">X</b> 10 sessions - ${item.sessions_ten}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Prices;
