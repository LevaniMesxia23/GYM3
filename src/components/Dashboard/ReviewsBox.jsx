import { clientInfo } from "../../services/GymApi";

function ReviewsBox() {
  const infoLength = clientInfo.length;
  const infoReduce = clientInfo
    ?.map((rating) => rating.rating)
    .reduce((acc, cur) => acc + cur);
  const mainRating = infoReduce / infoLength;
  console.log(mainRating.toFixed(1));

  return (
    <div className="bg-[#323232] w-full px-7 rounded-2xl py-8 ">
        <h1 className="text-white text-[1.5rem] mb-3">Reviews and Ratings</h1>
      <div className="flex items-center gap-3 mb-5">
        <div>
          <h2 className=" text-white text-[2.5rem]">{mainRating.toFixed(1)}</h2>
        </div>
        <div>
          <img className="w-[22px] h-[22px]" src="/star.png" alt="" />
          <p className="text-[#A6A6A6]">Based on {infoLength} ratings</p>
        </div>
      </div>
      <div className="bg-[#A6A6A6] w-full h-[1px] opacity-35"></div>

      <div className=" flex flex-col gap-2">
        <div className="flex justify-between items-center mt-2 text-white">
          <p>Positive Solutions</p>
          <p>4.1</p>
        </div>
        <div className="h-[7px] w-full bg-white rounded-[10px]"></div>
      </div>

      <div className=" flex flex-col gap-2 mt-2">
        <div className="flex justify-between items-center mt-2 text-white">
          <p>Neutral</p>
          <p>1.4</p>
        </div>
        <div className="h-[7px] w-full bg-white rounded-[10px]"></div>
      </div>
    </div>
  );
}

export default ReviewsBox;
