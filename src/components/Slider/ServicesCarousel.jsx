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
  const services = data?.data;

  return (
    <section className="bg-[#121212]">
      <section className="md:pl-12 lg:pl-16 text-white pl-6 pt-5 pb-5">
        <h3 className="text-[#C4C4C4] mb-5 text-center lg:text-left text-md">
          YOUR FITNESS JOURNEY STARTS HERE
        </h3>
        <Swiper
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={15}
          slidesPerView={1}
        >
          {(isLoading ? Array.from({ length: 5 }) : services)?.map((service, index) => (
            <SwiperSlide
              key={service?.id || index}
              className="cursor-pointer rounded-2xl max-w-[305px] lg:max-w-[295px] border border-[#4D4D4D]"
            >
              <div className="flex flex-col items-center p-5 group">
                {isLoading ? (
                  <div className="flex justify-center items-center w-full h-[240px]">
                    <l-grid size="60" speed="1.5" color="#D7FD44" />
                  </div>
                ) : (
                  <img
                    className="w-full h-[240px] object-cover rounded-lg transition-all duration-300 ease-in-out transform group-hover:h-[176px]"
                    src={service.image}
                    alt={service.name}
                  />
                )}
                <span className="mt-3 font-bold py-[2px] text-center">
                  {isLoading ? <Skeleton width="80%" /> : service.name}
                </span>
                <span className="subtext text-sm hidden group-hover:block mt-1 text-center">
                  {isLoading ? <Skeleton width="90%" /> : service.description}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default ServicesCarousel;
