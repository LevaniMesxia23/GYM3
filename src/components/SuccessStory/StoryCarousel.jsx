import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { useSuccessStory } from "../../hooks/useSuccessStory";
import ThreeArrow from "../../../public/threeArrow.svg";
import FourArrow from "../../../public/fourArrow.svg";
import { Grid } from "swiper/modules";
import { Mycontext } from "../../context/context";
import { useContext } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import Skeleton from "react-loading-skeleton";
import { grid } from "ldrs";

grid.register();

function StoryCarousel() {
  const { isDesktop } = useContext(Mycontext);
  const { data, error, isLoading } = useSuccessStory();
  const mappedImages = data?.about.map((item) => item.image);

  if (error)
    return (
      <div className="flex justify-center items-center h-[6.25rem]">
        <ClockLoader color="#D7FD44" size={80} />
      </div>
    );

  if (isLoading)
    return (
      <div className="border-[#4D4D4D] border-[1px] p-10 bg-[#121212] rounded-2xl mx-10 flex flex-col items-center ">
        <div className="flex flex-col items-center justify-center mb-4">
          <l-grid size="60" speed="1.5" color="#D7FD44" />
        </div>
        <div className="flex flex-col w-full">
          <Skeleton count={1} height={215 * 3} className="mb-4 bg-[#e5e7eb]" />
        </div>
      </div>
    );

  return (
    <div className="border-[#4D4D4D] border-[1px] p-10 bg-[#121212] rounded-2xl mx-10">
      <div className="flex justify-start items-center gap-6 mb-10">
        <img
          src={isDesktop ? FourArrow : ThreeArrow}
          alt=""
          className="rotate"
        />
        <p
          className="uppercase font-bold"
          style={{
            background: "linear-gradient(180deg, #C4C4C4 0%, #737373 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Success Story
        </p>
      </div>
      <div className="">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          modules={[Grid]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              grid: { rows: 1 },
            },
            768: {
              slidesPerView: 2,
              grid: { rows: 4 },
            },
            1024: {
              slidesPerView: 3,
              grid: { rows: 3 },
            },
          }}
        >
          {mappedImages?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={image}
                  alt={`Success Story ${index + 1}`}
                  className="w-full h-[215px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-end mt-10">
        <img
          src={isDesktop ? FourArrow : ThreeArrow}
          alt=""
          className="rotate-180"
        />
      </div>
    </div>
  );
}

export default StoryCarousel;
