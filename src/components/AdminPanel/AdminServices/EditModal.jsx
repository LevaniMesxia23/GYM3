import Cancel from "/cancel.svg";
import { usePriceId } from "../../../hooks/usePriceId";
import { useState, useEffect } from "react";

function EditModal({ id }) {
  if (!id) {
    return null; // Or a loading spinner if you'd like
  }
  const { data, isLoading } = usePriceId(id);
  const priceData = data?.about || {};
  console.log("EditModal ID:", id);

  const [serviceText, setServiceText] = useState("");
  const [singleSessionPrice, setSingleSessionPrice] = useState("");
  const [fiveSessionPrice, setFiveSessionPrice] = useState("");
  const [tenSessionPrice, setTenSessionPrice] = useState("");

  // Set state values once data is fetched
  useEffect(() => {
    if (!isLoading && priceData) {
      setServiceText(priceData.name || "");
      setSingleSessionPrice(priceData.sessions_single || "");
      setFiveSessionPrice(priceData.sessions_five || "");
      setTenSessionPrice(priceData.sessions_ten || "");
    }
  }, [isLoading, priceData]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-[2.56rem] bg-[#323232] flex items-center justify-center w-[55rem] rounded-[1.25rem]">
      <div className="px-[1.375rem] bg-black rounded-lg w-full py-[2.56rem]">
        <div className="flex w-full items-center justify-between pb-[2.56rem]">
          <div className="flex flex-col gap-4">
            <p className="uppercase font-bold text-[1.5rem] text-white">
              Edit Services
            </p>
            <p className="text-white">Edit services you provide</p>
          </div>
          <div className="bg-[#D7FD44] flex py-4 px-4 items-center justify-center rounded-full cursor-pointer">
            <img src={Cancel} alt="Close" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <h2 className="text-white">Input Service Title</h2>
          </div>
          <div className="flex flex-col ml-[1.44rem]">
            <input
              type="text"
              className="w-full bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
              placeholder="Weight Loss"
              onChange={(e) => setServiceText(e.target.value)}
              value={serviceText}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-9">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h2 className="text-white">Session Prices</h2>
            </div>
          </div>

          <div className="flex gap-4 pl-5">
            <div className="flex flex-col mt-3 gap-2">
              <label className="text-white">Single Session Price</label>
              <input
                type="number"
                className="bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                onChange={(e) => setSingleSessionPrice(Number(e.target.value))}
                value={singleSessionPrice}
                placeholder="10$"
              />
            </div>

            <div className="flex flex-col mt-3 gap-2">
              <label className="text-white">5-Session Package Price</label>
              <input
                type="number"
                className="bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                onChange={(e) => setFiveSessionPrice(Number(e.target.value))}
                value={fiveSessionPrice}
                placeholder="50$"
              />
            </div>

            <div className="flex flex-col mt-3 gap-2">
              <label className="text-white">10-Session Package Price</label>
              <input
                type="number"
                className="bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                onChange={(e) => setTenSessionPrice(Number(e.target.value))}
                value={tenSessionPrice}
                placeholder="100$"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-[3.81rem] ">
          <div className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer">
            <p className="w-3 h-3 text-[#D7FD44]">+</p>
            <p className="text-[#D7FD44]">Edit Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
