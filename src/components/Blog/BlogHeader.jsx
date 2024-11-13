import { useMediaQuery } from "@uidotdev/usehooks";

const BlogHeader = () => {
  const isSmallResponsive = useMediaQuery("only screen and (min-width : 468px)")
  return (
    <div className="flex flex-col items-center  gap-10 pt-10 ">
      <h1 className="text-[#C4C4C4] text-[40px] font-normal text-center">
        PRIVATE PERSONAL TRAINING
      </h1>
      <div className={`flex gap-[32px]  ${!isSmallResponsive ? "flex-col" : "flex-row"} `}>
        <span className="p-[10px] px-[25px] rounded-[24px] border text-[#D7FD44] border-[#D7FD44] ">
          Workout Routines
        </span>
        <span className="p-[10px]  px-[25px] rounded-[24px] border text-[#D7FD44] border-[#D7FD44] ">
          Nutrition and diet
        </span>
      </div>
      <div className="w-[90%] mb-20 mt-7  bg-[#121212] max-w-[1780px] ">
        <img
          src='/blogMainImage.jpeg'
          className="w-full rounded-xl  max-h-[650px] object-cover"
        />
      </div>
    </div>
  );
};
export default BlogHeader;
