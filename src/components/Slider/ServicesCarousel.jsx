import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useServices } from "../../hooks/useServices";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { grid } from "ldrs";

grid.register();

const ServicesCarousel = () => {
  const { data, isLoading } = useServices();
  const services = data?.data || [];
  const loadingPlaceholderCount = services.length || 8; 

  return (
    <div className="lg:flex flex-col justify-center items-center w-full">
      <div className="bg-[#121212] h-[422px] py-[2rem] ">
        <section className="pr-10 text-white pl-10 py-5 max-w-[1520px]">
          <h3 className="text-[#C4C4C4] mb-5 text-center lg:text-left text-md">
            YOUR FITNESS JOURNEY STARTS HERE
          </h3>
          <Swiper
            className="border border-[#4D4D4D] rounded-2xl"
            breakpoints={{
              768: { slidesPerView: "auto" },
              1024: { slidesPerView: "auto" },
            }}
            spaceBetween={15}
            slidesPerView="auto"
          >
            {(isLoading
              ? Array.from({ length: loadingPlaceholderCount })
              : services
            ).map((service, index) => (
              <SwiperSlide
                key={service?.id || index}
                className="cursor-pointer rounded-2xl max-w-[305px] lg:max-w-[295px] border border-[#D7FD44] m-4 mr-1"
              >
                <div className="flex flex-col items-center justify-between p-5 h-[320px] group">
                  {isLoading ? (
                    <div className="flex justify-center items-center lg:flex flex-col w-full h-[240px]">
                      <l-grid size="60" speed="1.5" color="#D7FD44" />
                    </div>
                  ) : (
                    <img
                      className="w-full h-[240px] object-cover rounded-lg transition-transform duration-1000 ease-in-out transform group-hover:h-[50%]"
                      src={service.image}
                      alt={service.name}
                    />
                  )}
                  <span className="mt-3 font-bold py-[2px] text-center">
                    {isLoading ? <Skeleton width="80%" /> : service.name}
                  </span>
                  <span className="subtext text-sm max-h-0 overflow-hidden group-hover:max-h-[100px] transition-all duration-500 ease-in-out mt-1 text-center">
                    {isLoading ? <Skeleton width="90%" /> : service.description}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default ServicesCarousel;
