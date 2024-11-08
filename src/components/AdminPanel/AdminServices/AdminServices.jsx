import DownArrow from "/downArrow.svg";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";
import { usePrice } from "../../../hooks/usePrice";
import useAddService from "../../../hooks/useAddServices";

function AdminServices() {
  const {addServicesInfo} = useAddService()
  const { data, error, isLoading } = usePrice();
  const [arrowClick, setArrowClick] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [serviceText, setServiceText] = useState("")
  
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

  const handleAddService = async () => {
    try {
      await addServicesInfo({ name: serviceText }); 
      setServiceText(""); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="px-[5rem] mt-[5rem] pb-[10.5rem]">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-4">
          <p className="uppercase font-bold text-[1.5rem] text-white">
            Services
          </p>
          <p className="text-white">Add services you provide</p>
        </div>
        <div className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl">
          <p className="w-3 h-3 text-[#D7FD44]">+</p>
          <p onClick={handleAddService} className="text-[#D7FD44]">Add Service</p>
        </div>
          <input type="text" onChange={(e) => setServiceText(e.target.value)} value={serviceText} />
      </div>

      {isLoading
        ? Array.from({ length: showAll ? priceData.length : 6 }).map(
            (_, index) => (
              <div key={index} className="w-full mt-7">
                <div className="bg-[#222] rounded-[8.75rem] px-8 py-6 flex items-center justify-between">
                  <Skeleton className="w-1/2 h-[2rem]" />
                  <Skeleton circle={true} className="w-[5rem] h-[5rem]" />
                </div>
              </div>
            )
          )
        : visibleData.map((item, index) => (
            <div
              key={index}
              className={`w-full mt-7 bg-[#222] ${
                arrowClick.includes(index) ? "rounded-xl" : "rounded-[8.75rem]"
              }  px-8 py-6 flex flex-col cursor-pointer transition-all duration-500`}
              
            >
              <div className="flex items-center justify-between">
                <p className="text-[1.25rem] font-bold text-[#C4C4C4] uppercase">
                  {item.name}
                </p>
                <div onClick={() => handleToggle(index)} className="bg-[#D7FD44] rounded-full w-[3.375rem] h-[3.375rem] flex items-center justify-center">
                  <img
                    src={DownArrow}
                    alt="Expand section"
                    className={`transition-transform duration-300 w-[1.58206rem] h-[1.58206rem] ${
                      arrowClick.includes(index)
                        ? "-rotate-[90deg]"
                        : "rotate-0"
                    }`}
                  />
                </div>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  arrowClick.includes(index)
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {arrowClick.includes(index) && (
                  <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between mt-4 transition-all duration-500 ease-in-out">
                    <div className="flex flex-col gap-3">
                      <p className="text-white text-[1.25rem] font-bold">
                        Price
                      </p>
                      <div>
                        <p className="text-[#ABABAB]">
                          Single Session One-on-one training session $
                          {item.sessions_single}
                        </p>
                        <p className="text-[#ABABAB]">
                          5-Session Package5 one-on-one training sessions $
                          {item.sessions_five}
                        </p>
                        <p className="text-[#ABABAB]">
                          10-Session Package10 one-on-one training sessions $
                          {item.sessions_ten}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="bg-[#D7FD44] w-[3.375rem] h-[3.375rem] rounded-full flex items-center justify-center">
                        <img className="w-[1.58206rem] h-[1.58206rem] " src="/pen.png" alt="" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

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

export default AdminServices;
