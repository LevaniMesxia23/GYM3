import Cancel from "/cancel.svg";
import { usePriceId } from "../../../hooks/usePriceId";
import { useState, useEffect } from "react";

function EditModal({ id }) {
  // if (!id) {
  //   return null;
  // }
  // const { data, isLoading } = usePriceId(id);
  // const priceData = data?.about || {};
  // console.log("EditModal ID:", id);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

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
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const formData = new FormData(e.target);
            const formValues = Object.fromEntries(formData);
            console.log(formValues);
          }}
        >
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
                name="title"
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
                  placeholder="10$"
                  name="singleSession"
                />
              </div>

              <div className="flex flex-col mt-3 gap-2">
                <label className="text-white">5-Session Package Price</label>
                <input
                  type="number"
                  className="bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                  placeholder="50$"
                  name="fiveSession"
                />
              </div>

              <div className="flex flex-col mt-3 gap-2">
                <label className="text-white">10-Session Package Price</label>
                <input
                  type="number"
                  className="bg-[#323232] rounded-lg h-11 pl-[1.44rem] text-white"
                  placeholder="100$"
                  name="tenSession"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <button className="flex items-center justify-center mt-[3.81rem] ">
              <div className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer">
                <p className="w-3 h-3 text-[#D7FD44]">+</p>
                <p className="text-[#D7FD44]">Edit Service</p>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
