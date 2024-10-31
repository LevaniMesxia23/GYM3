function Feedbacks() {
  const clientInfo = [
    {
      name: "User Name Name",
      day: 14,
      month: "october",
      year: 2024,
      new: true,
      rating: 4,
      review:
        "I've been training with [Trainer's Name] for six months now, and I couldn't be happier! Their personalized approach has helped me achieve my fitness goals while keeping me motivated and engaged. Highly recommend! I lost 15 pounds in just two months! Their tailored workout plans and nutritional guidance made all the difference. I never thought I could feel this confident. Thank you!",
    },
    {
      name: "User Name Name",
      day: 20,
      month: "November",
      year: 2022,
      new: false,
      rating: 1,
      review:
        "I've been training with [Trainer's Name] for six months now, and I couldn't be happier! Their personalized approach has helped me achieve my fitness goals while keeping me motivated and engaged. Highly recommend! I lost 15 pounds in just two months! Their tailored workout plans and nutritional guidance made all the difference. I never thought I could feel this confident. Thank you!",
    },
    {
      name: "User Name Name",
      day: 14,
      month: "october",
      year: 2024,
      new: true,
      rating: 4,
      review:
        "I've been training with [Trainer's Name] for six months now, and I couldn't be happier! Their personalized approach has helped me achieve my fitness goals while keeping me motivated and engaged. Highly recommend! I lost 15 pounds in just two months! Their tailored workout plans and nutritional guidance made all the difference. I never thought I could feel this confident. Thank you!",
    },
  ];

  return (
    <div className="px-6 mt-14 py-14">
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
              <p>{info.rating}</p>
            </div>
            <p className="text-[#ADADAD]">{info.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedbacks;
