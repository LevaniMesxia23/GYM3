import { clientInfo } from "../../services/GymApi";
function Feedbacks() {


  const renderStars = (rating) => {
    return Array.from({ length: clientInfo.length }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${
          i < rating ? "text-yellow-500" : "text-gray-400"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className=" my-14  border border-[#ADADAD] bottom-1 rounded-2xl">
      <div className="bg-[#323232] text-white px-12 rounded-2xl py-8 flex flex-col gap-5 max-h-[540px] overflow-y-auto pr-10 custom-scrollbar ">
        <h1 className="text-[26px] font-bold">Client Feedbacks</h1>
        {clientInfo?.map((info, index) => (
          <div
            key={index}
            className="bg-[#121212] px-6 rounded-xl py-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500"></div>
                <div className="flex flex-col">
                  <p>{info.name}</p>
                  <div className="flex gap-2">
                    <p className="text-[#ADADAD]">{info.day}</p>
                    <p className="text-[#ADADAD]">{info.month}</p>
                    <p className="text-[#ADADAD]">{info.year}</p>
                    {info.new && (
                      <div className="px-3 bg-[#D7FD44] rounded-md">
                        <p className="text-black">New</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {renderStars(info.rating)}
              </div>
            </div>
            <p className="text-[#ADADAD]">{info.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedbacks;
