import React from "react";

export default function AboutHeader() {
  return (
    <div>
      <div className=" flex flex-col my-[3.25rem]">
        <h1 className="text-[1.875rem] font-bold text-white">About me</h1>
        <p className="text-[1rem] font-medium text-white">
          Add info for your clients
        </p>
      </div>

      <div className="flex flex-col gap-[1.81rem]">
        <p className="text-[1rem] font-medium text-white">
          Your Profile Picture
        </p>
        <div className="flex items-center gap-6">
          <div>
            <img
              className="rounded-full w-[5rem] h-[5rem]"
              src="/aboutGirlRun.png"
              alt=""
            />
          </div>
          <div className="flex gap-4">
            <div className="border-[1px] border-[#D7FD44] bg-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer max-w-[12.1875rem]">
              <p className="w-3 h-3 text-black">+</p>
              <p className="text-black">Upload New</p>
            </div>

            <div className="border-[1px] border-[#D7FD44] flex gap-[0.62rem] px-10 py-2 rounded-3xl cursor-pointer ">
              <p className="text-[#D7FD44]">Remove Profile Picture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
